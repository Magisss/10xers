'use strict';
const { hashPassword } = require('../helpers/bcrypt')
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = JSON.parse(fs.readFileSync('./data/users.json','utf-8'))
    .map(el => {
     el.createdAt = el.updatedAt = new Date()
     el.password = hashPassword(el.password);
     return el
    })
    return queryInterface.bulkInsert('Users', users, {});
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
