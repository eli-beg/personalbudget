const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("transaction", {
    // id: {
    //   type: Datatypes.UUID,
    //   primaryKey: true,
    // },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
