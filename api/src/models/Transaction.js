const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const TRANSACTION_STATUS = require("../enum/Transaction.enum");

module.exports = (sequelize) => {
  sequelize
    .define("transaction", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      concept: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(TRANSACTION_STATUS)),
        allowNull: true,
      },
    })
    .beforeCreate((transaction) => (transaction.id = uuidv4()));
};
