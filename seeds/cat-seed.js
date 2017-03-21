
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {name: 'Captain Furryboots', breed: 'Scottish Fold'},
        {name: 'Angelina Ballerina', breed: 'Siamese'},
        {name: 'Leutienent Colonel Puddles Von Puddingworth the Third', breed: 'Exotic Shorthair'}
      ])
    })
}
