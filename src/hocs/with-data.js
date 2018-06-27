import { isServer, isClient } from 'config'
import React, { createContext, PureComponent } from 'react'
import { shallowEqual, wrapDisplayName } from 'recompose'
import reactTreeWalker from 'react-tree-walker'

const createDataStore = (initialData) => {
  let store = initialData || {}
  let pointer = 0

  return {
    init: (value) => {
      pointer = 0
      store = value || {}
    },
    save: (id, result) => {
      store[id] = result
    },
    nextId: () => {
      pointer += 1
      return pointer
    },
    getById: (id) => store[id],
    get: () => store
  }
}

const DataContext = createContext()
const DataProvider = DataContext.Provider

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

  const getData = (context) => {
    const promise = optGetData({ isClient, isServer, ...context })
    promise.then((data) => context.dataStore.save(id, data))
    return promise
  }

  class Data extends PureComponent {
    static displayName = wrapDisplayName(BaseComponent, 'withData')
    getInitialData = (context) => getData({
      ...context,
      ...this.props
    })
    handleRequest = (promise) => {
      this.setState({ isLoading: true })

      promise
        .then((data) => this.setState({ isLoading: false, data }))
        .catch((error) => this.setState({ isLoading: false, error }))

      return promise
    }
    constructor (props) {
      super(props)

      if (!id) {
        id = props.dataStore.nextId()
      }

      this.state = {
        isLoading: false,
        error: null,
        data: props.dataStore.getById(id)
      }
    }
    componentDidMount () {
      if (this.props.dataStore.getById(id) == null) {
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

  return (props) => (
    <DataContext.Consumer>
      {(dataStore) => <Data {...props} dataStore={dataStore} />}
    </DataContext.Consumer>
  )
}

const getAppInitialData = (dataStore, tree, context) => {
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
    }, {}, {}).then(() => resolve(dataStore.get()))
  )
}

export {
  createDataStore,
  DataProvider,
  withData,
  getAppInitialData
}
