import React from 'react'

export const Template = ({ head, files, ssr, children }) => (
  <html {...head.htmlAttributes.toComponent()}>
    <head>
      {head.meta.toComponent()}
      {head.title.toComponent()}
      {head.link.toComponent()}
      {files.css.map((href) => (
        <link key={href} href={href} rel='stylesheet' />
      ))}
    </head>
    <body {...head.bodyAttributes.toComponent()}>
      <div id='app'>{children}</div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window._ssr = ${JSON.stringify(ssr)};`
        }}
      />
      <script async defer src='https://cdn.coollabs.io/save.js' />
      <script src='https://cdn.polyfill.io/v3/polyfill.min.js' />
      {files.js.map((src) => (
        <script key={src} src={src} async />
      ))}
    </body>
  </html>
)
