const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  db.getCats(req.app.get('knex'))
    .then(function (cats) {
      console.log(cats)
      res.send({cats: cats})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', function (req, res) {
  const id = Number(req.params.id)
  db.getCatDetails(id, req.app.get('knex'))
    .then(function (cat) {
      res.json(cat)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', function (req, res) {
  const name = req.body.name
  const breed = req.body.breed
  db.addCat(name, breed, req.app.get('knex'))
    .then(function () {
      res.send('Cat added meow!')
    })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
