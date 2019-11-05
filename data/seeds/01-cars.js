
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('showroomCars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('showroomCars').insert([
        {VIN: '1HGBH41JXMN109186', Make: 'Honda', Model: 'Civic', Mileage: '259834', TransmissionType: 'Manual', Status: 'Needing repair'},
        {VIN: '1HGBH41JAYN109186', Make: 'Ford', Model: 'Fiesta', Mileage: '7834', TransmissionType: 'Automatic', Status: 'Clean'},
        {VIN: '1RUAIRIDH109186', Make: 'Fiat', Model: '500', Mileage: '88834'}

      ]);
    });
};
