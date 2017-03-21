module.exports = {
  getCats: getCats,
  getCatDetails: getCatDetails,
  addCat: addCat
}

function getCats (knex) {
  return knex('cats').select()
}

function getCatDetails (id, knex) {
  return knex('cats').where('id', id).first()
}

function addCat (name, breed, knex) {
  return knex('cats').insert({name: name, breed: breed})
}
