"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Alina",
          last_name: "Derbish",
          email: "derbish@gmail.com",
          birthday: "1999-01-02",
          number_phone: "+380998765432",
          gender: "female",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Richard",
          last_name: "Bush",
          email: "bush@gmail.com",
          birthday: "1993-11-22",
          number_phone: "+380674563421",
          gender: "male",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Zak",
          last_name: "Wolsh",
          email: "wolsh@gmail.com",
          birthday: "1989-10-05",
          number_phone: "+380506558877",
          gender: "male",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
