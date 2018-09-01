import React from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'
import { Layout, Box, FlexBox, Text } from 'pss-components'
import { withData } from 'react-universal-data'
import { withIntl } from '../hocs'
import { getPicturs } from '../api'

const Picture = styled('img')`
  display: block;
  height: 500px;
  max-width: none;
  margin: auto;
`

const Home = ({ _t, isLoading, children, pictures = [] }) => (
  <>
    <Layout.Content wd>
      {isLoading ? (
        <Text>
          {_t('label.loading')}
        </Text>
      ) : (
        <Box ht wd ovsx ovtouch>
          <FlexBox ht wd={`${(pictures.length * 100)}%`}>
            {pictures.map((pic) => (
              <FlexBox.Item key={pic.id} wd={(1 / pictures.length)} mgy='auto'>
                <Box comp='figure'>
                  <Picture src={pic.url} />
                  <Box comp='figcaption'>
                    <Text align='center'>
                      {pic.name}
                    </Text>
                  </Box>
                </Box>
              </FlexBox.Item>
            ))}
          </FlexBox>
        </Box>
      )}
    </Layout.Content>
    {children({ isLoading })}
  </>
)

export default compose(
  withData(
    ({ match }) => getPicturs(match.params).then((res) => ({
      pictures: res.data
    })),
    (prev, next) =>
      prev.match.params.lang !== next.match.params.lang
  ),
  withIntl
)(Home)
