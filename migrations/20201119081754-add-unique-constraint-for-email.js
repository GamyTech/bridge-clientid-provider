'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Accounts', {
      fields: ['email'],
      type: 'unique',
    })
  },

  down: async (queryInterface, Sequelize) => {}
};
