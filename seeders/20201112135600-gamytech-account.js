'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accounts', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'contact@gamytech.com',
      companyName: 'GamyTech LTD',
      clientId: 'gamytech-client-id',
      websocketUrl: 'ws://localhost:3001/',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
