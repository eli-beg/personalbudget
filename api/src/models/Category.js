const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const CATEGORY_STATUS = require("../enum/Category.enum");

module.exports = (sequelize) => {
  sequelize
    .define("category", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(CATEGORY_STATUS)),
        allowNull: true,
      },
    })
    .beforeCreate((category) => (category.id = uuidv4()));
};
