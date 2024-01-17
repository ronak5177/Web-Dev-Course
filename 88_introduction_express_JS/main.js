const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('contact us!')
})

app.get('/about', (req, res) => {
  res.send('about us')
})

app.get('/blog/:blogName', (req, res) => {
    // For URL: http://localhost:3000/blog/intro-to-python?lang=eng&region=in
    console.log(req.query)  // output: { lang: 'eng', region: 'in' }
    res.send(`This is about ${req.params.blogName}`)
})

app.get('/blog/:blogName/:second', (req, res) => {
  res.send(`This is about ${req.params.blogName} & ${req.params.second}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})