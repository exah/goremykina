const path = require('path')
const universalConfig = require('./universal')

const resolvePath = (...paths) => path.resolve(
  path.resolve(__dirname, '../'),
  ...paths
)

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
const siteUrl = process.env.SITE_URL || `http://${host}:${port}`
const scale = JSON.parse(process.env.SCALE || null)

const config = {
  host,
  port,
  siteUrl,
  scale,
  paths: {
    root: resolvePath(),
    config: resolvePath('./config'),
    public: resolvePath('./public'),
    dist: resolvePath('./dist'),
    distClient: resolvePath('./dist/client'),
    distServer: resolvePath('./dist/server'),
    src: resolvePath('./src')
  },
  public: { siteUrl }
}

module.exports = Object.assign({}, universalConfig, config)
