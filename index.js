const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is live on: ${port}`)
})