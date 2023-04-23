'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Luke Skywalker',
        email: 'lskywalker@mail.com',
        portfolioId: 123,
      },
      {
        name: 'Leia Organa',
        email: 'lorgana@mail.com',
        portfolioId: 123,
      },
      {
        name: 'Obi-Wan Kenobi',
        email: 'obi@mail.com',
        portfolioId: 123,
      },
      {
        name: 'Han Solo',
        email: 'hsolo@mail.com',
        portfolioId: 123,
      },
      {
        name: 'Anakin Skywalker',
        email: 'vader@mail.com',
        portfolioId: 123,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
