exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function (table) {
    table.string('name')
    table.string('breed')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
}
