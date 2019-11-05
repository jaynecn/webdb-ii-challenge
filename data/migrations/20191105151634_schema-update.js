
exports.up = function(knex) {
  return knex.schema.createTable('showroomCars', table => {
    table.increments();
    table.string('VIN', 17)
      .notNullable()
      .unique();
    table.string('Make', 128)
      .notNullable()
    table.string('Model', 128)
      .notNullable();
    table.integer('Mileage', 7)
      .notNullable();
    table.string('TransmissionType')
    table.string('Status')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('showroomCars');
  
};
