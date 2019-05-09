var express = require('express')
var app = express()
var port = 8080
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('hello hi')
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
  