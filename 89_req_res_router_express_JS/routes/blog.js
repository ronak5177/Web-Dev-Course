const express = require('express')
const router = express.Router()

// route to trigger the capture
router.get('/', (req, res) => {
    res.send('blog from router')
})
router.get('/about', (req, res) => {
    res.send('about blog from router')
})
router.get('/blogpost/:slug', (req, res) => {
    res.send(`blogpost for ${req.params.slug}`)
})

module.exports = router