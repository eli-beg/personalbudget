const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const USER_STATUS = require("../enum/User.enum");
const bcrypt = require("bcryptjs");

module.exports = (sequelize) => {
  sequelize
    .define("user", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(USER_STATUS)),
        allowNull: true,
      },
    })
    .beforeCreate((user) => {
      user.id = uuidv4();
      user.password = bcrypt.hashSync(user.password, 10);
    });
};
