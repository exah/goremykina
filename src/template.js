import { html } from 'common-tags'

export default (params) => {
  const { files } = params.htmlWebpackPlugin

  return html`
    <!DOCTYPE html>
    <html lang="en" class="no-js">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${files.css.map(file => html`<link rel="stylesheet" href="${file}" />`)}
        <script>
          (function(html) {
            html.classList.remove('no-js')
          })(document.documentElement);
        </script>
      </head>
      <body>
        <div id="app"></div>
        ${files.js.map(file => html`<script src="${file}"></script>`)}
      </body>
    </html>
  `
}
