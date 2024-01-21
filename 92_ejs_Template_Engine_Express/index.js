const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName = "HoodyFoody"
  let siteDescription = "Welcome to the zone of delicious flavours"
  let arr = ["Veg", "Punjabi", "North-Indian"]
  res.render("index", {siteName: siteName, siteDescription: siteDescription, arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})