const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const USER_STATUS = require("../enum/User.enum");

module.exports = (sequelize) => {
  sequelize
    .define("user", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(USER_STATUS)),
        allowNull: true,
      },
    })
    .beforeCreate((user) => (user.id = uuidv4()));
};
