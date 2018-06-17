const isDev = process.env.NODE_ENV !== 'production'
const isProd = !isDev
const isClient = typeof window !== 'undefined'
const isServer = !isClient

module.exports = {
  isClient,
  isServer,
  isDev,
  isProd
}
