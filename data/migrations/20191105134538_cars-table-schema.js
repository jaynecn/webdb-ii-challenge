
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.string('VIN')
      .notNullable()
      .unique();
    table.string('Make')
      .notNullable()
    table.string('Model')
      .notNullable();
    table.integer('Mileage')
      .notNullable();
    table.string('Transmission type')
    table.string('Status')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
  
};
