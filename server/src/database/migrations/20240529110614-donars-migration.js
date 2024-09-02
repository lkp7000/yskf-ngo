"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    "use strict";

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up(queryInterface, Sequelize) {
        queryInterface.createTable("donars", {
          transactionId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          firstName: {
            allowNull: false,
            type: Sequelize.STRING(30),
          },
          lastName: {
            allowNull: false,
            type: Sequelize.STRING(30),
          },
          amount: {
            allowNull: false,
            type: Sequelize.INTEGER,
          },
          status: {
            allowNull: false,
            type: Sequelize.BOOLEAN,
          },
          email: {
            allowNull: false,
            type: Sequelize.STRING(50),
            unique: true,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updateAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      },

      async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        queryInterface.dropTable("donars");
      },
    };
  },
};
