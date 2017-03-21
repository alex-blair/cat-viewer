const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const cats = require('./routes/cats')

const app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, '../public')))
app.use('/cats', cats)

module.exports = app
