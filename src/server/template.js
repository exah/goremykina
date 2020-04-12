import serialize from 'serialize-javascript'

export default ({ app, files }) =>
  `<!DOCTYPE html>
<html class="no-js" ${app.head.htmlAttributes}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    ${app.head.title}
    ${app.head.meta}
    ${app.head.link}
    ${files.css
      .map((file) => `<link rel="stylesheet" href="${file}" />`)
      .join('')}
  </head>
  <body ${app.head.bodyAttributes}>
    <div id="app">${app.html}</div>
    <script>
      document.documentElement.classList.remove('no-js');
      window._ssr = ${serialize(app.ssr)};
    </script>
    <script src="https://cdn.polyfill.io/v3/polyfill.min.js"></script>
    <script async src="https://cdn.coollabs.io/save.js"></script>
    ${files.js.map((file) => `<script async src="${file}"></script>`).join('')}
  </body>
</html>`
