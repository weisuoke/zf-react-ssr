import React from 'react'
import Counter from '../containers/Counter'
import { renderToString } from 'react-dom/server'

let express = require('express')
let app = express()
app.use(express.static('public'))
app.get('/', function (req, res) {
  let html = renderToString(<Counter/>)
  res.send(
    `
      <html>
        <head>
          <title>weisuoke SSR</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/client.js"></script>
        </body>
      </html>
    `
  )
})

app.listen(3000, function () {
  console.log('server started at port 3000')
})
