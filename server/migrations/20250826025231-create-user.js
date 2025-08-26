"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(64),
        field: "first_name",
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(64),
        field: "last_name",
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      numberPhone: {
        type: Sequelize.STRING(13),
        field: "number_phone",
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM("male", "female", "another"),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
