const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

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
    })
    .beforeCreate((category) => (category.id = uuidv4()));
};
