import render from './render'
let express = require('express')
let app = express()
app.use(express.static('public'))
app.get('*', function (req, res) {
  render(req, res)
})

app.listen(3000, function () {
  console.log('server started at port 3000')
})
