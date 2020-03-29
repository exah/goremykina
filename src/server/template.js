import serialize from 'serialize-javascript'
import { dedent as html } from '../utils'

export default ({ app, files }) => html`
  <!DOCTYPE html>
  <html class="no-js" ${app.head.htmlAttributes}>
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      ${app.head.title} ${app.head.meta} ${app.head.link}
      ${files.css.map(
        (file) =>
          html`
            <link rel="stylesheet" href="${file}" />
          `
      )}
    </head>
    <body ${app.head.bodyAttributes}>
      <div id="app">${app.html}</div>
      <script>
        document.documentElement.classList.remove('no-js')
        window._ssr = ${serialize(app.ssr, { isJSON: true })}
      </script>
      <script src="https://cdn.polyfill.io/v3/polyfill.min.js"></script>
      <script async src="https://cdn.coollabs.io/save.js"></script>
      ${files.js.map(
        (file) =>
          html`
            <script async src="${file}"></script>
          `
      )}
    </body>
  </html>
`
