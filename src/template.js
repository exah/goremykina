import { html } from 'common-tags'
import serialize from 'serialize-javascript'

export default ({
  app,
  files,
  ssrData = {},
  lang = 'en'
}) => html`
  <!DOCTYPE html>
  <html lang="${lang}" class="no-js" ${app.head.htmlAttributes}>
    <head>
      <meta charset="utf-8" />
      ${app.head.title}
      ${app.head.meta}
      ${app.head.link}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ${files.css.map(file => html`<link rel="stylesheet" href="${file}" />`)}
      <style>${app.css}</style>
      <script>
        (function(html) {
          html.classList.remove('no-js')
        })(document.documentElement);
      </script>
    </head>
    <body ${app.head.bodyAttributes}>
      <div id="app">${app.html}</div>
      <script>
        (function () {
          window._ssr = ${serialize(ssrData, { isJSON: true })};
        })();
      </script>
      ${files.js.map(file => html`<script src="${file}"></script>`)}
    </body>
  </html>
`
