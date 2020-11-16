'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {       
    return queryInterface.bulkInsert('Accounts', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      companyName: 'Dummy Company LTD',
      clientId: '2345876-2345555-2435324-545',
      websocketUrl: 'ws://client1.gamy-tech.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
