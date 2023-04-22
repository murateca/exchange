'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Shares', [
      {
        symbol: 'CBO',
        price: 18,
      },
      {
        symbol: 'ABC',
        price: 19,
      },
      {
        symbol: 'AOE',
        price: 20,
      },
      {
        symbol: 'IOE',
        price: 10,
      },
      {
        symbol: 'MSI',
        price: 91,
      },
      {
        symbol: 'NMX',
        price: 10,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Shares', null, {});
  },
};
