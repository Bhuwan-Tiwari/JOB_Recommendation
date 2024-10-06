'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      skills: {
        type: Sequelize.JSON,
        allowNull: true
      },
      experience_level: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desired_roles: {
        type: Sequelize.JSON,
        allowNull: true
      },
      locations: {
        type: Sequelize.JSON,
        allowNull: true
      },
      job_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};