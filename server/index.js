const express = require('express')
const bodyParser = require('body-parser')

const Review = require('../db/Review.js')

const app = express()
const port = 3000
const db = require('../db/index.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'))

app.get('/reviews', (req, res) => {
    Review.find({})
    .then(reviews => {
        res.send(reviews);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
