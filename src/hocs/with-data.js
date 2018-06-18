import { isServer, isClient } from 'config'
import React, { PureComponent } from 'react'
import reactTreeWalker from 'react-tree-walker'
import { shallowEqual, wrapDisplayName } from 'recompose'

let store = {}
let pointer = 0

const dataStore = {
  init: (_store) => {
    pointer = 0
    store = _store || {}
  },
  nextId: () => {
    pointer += 1
    return pointer
  },
  save: (id, result) => {
    store[id] = result
  },
  get: (id) => store[id],
  getAll: () => store
}

const alwaysResolve = () => Promise.resolve()

const defaultShouldDataUpdate = (prev, next) => {
  if (prev.match && prev.location) {
    return !(
      shallowEqual(prev.match.params, next.match.params) &&
      prev.location.pathname === next.location.pathname &&
      prev.location.search === next.location.search
    )
  }

  return false
}

const defaultMergeProps = (ownProps, stateProps) => ({
  ...ownProps,
  ...stateProps.data,
  isLoading: ownProps.isLoading || stateProps.isLoading,
  error: stateProps.error || ownProps.error || null
})

const withData = (
  optGetData = alwaysResolve,
  shouldDataUpdate = defaultShouldDataUpdate,
  mergeProps = defaultMergeProps
) => (BaseComponent) => {
  let id = null

  const getData = (contextData) => {
    const promise = optGetData({ isClient, isServer, ...contextData })
    promise.then((data) => dataStore.save(id, data))
    return promise
  }

  return class Data extends PureComponent {
    static displayName = wrapDisplayName(BaseComponent, 'withData')
    handleRequest = (promise) => {
      this.setState({ isLoading: true })
      const onSuccess = (data) => this.setState({ isLoading: false, data })
      const onError = (error) => this.setState({ isLoading: false, error })

      promise.then(onSuccess).catch(onError)
      return promise
    }
    getInitialData = (contextData) => getData({
      ...contextData,
      ...this.props
    })
    constructor (props) {
      super(props)

      if (!id) {
        id = dataStore.nextId()
      }

      this.state = {
        isLoading: false,
        error: null,
        data: dataStore.get(id)
      }
    }
    componentWillMount () {
      if (isClient && dataStore.get(id) == null) {
        this.handleRequest(getData(this.props))
      }
    }
    componentDidUpdate (prevProps) {
      if (shouldDataUpdate(prevProps, this.props)) {
        this.handleRequest(getData(this.props))
      }
    }
    render () {
      return (
        <BaseComponent {...mergeProps(this.props, this.state)} />
      )
    }
  }
}

const getAppInitialData = (tree, context) => {
  dataStore.init()

  return new Promise((resolve, reject) =>
    reactTreeWalker(tree, (el, instance) => {
      if (instance && instance.getInitialData) {
        return instance
          .getInitialData(context)
          .catch((error) => {
            reject(error)
            return false
          })
      }
    }, {}, {}).then(() => resolve(dataStore.getAll()))
  )
}

export { withData, dataStore, getAppInitialData }
