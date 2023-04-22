'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Portfolios', [
      {
        userId: 1,
        shareId: 1,
        quantity: 109,
      },
      {
        userId: 1,
        shareId: 2,
        quantity: 12,
      },
      {
        userId: 1,
        shareId: 3,
        quantity: 45,
      },
      {
        userId: 2,
        shareId: 4,
        quantity: 30,
      },
      {
        userId: 2,
        shareId: 2,
        quantity: 50,
      },
      {
        userId: 3,
        shareId: 5,
        quantity: 2,
      },
      {
        userId: 3,
        shareId: 2,
        quantity: 56,
      },
      {
        userId: 4,
        shareId: 1,
        quantity: 19,
      },
      {
        userId: 4,
        shareId: 3,
        quantity: 2,
      },
      {
        userId: 4,
        shareId: 4,
        quantity: 71,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Portfolios', null, {});
  },
};
