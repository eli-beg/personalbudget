require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { userInfo } = require("os");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/personalbudget`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Transaction, Category, User } = sequelize.models;

//  relaciones 1 a muchos
User.hasMany(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User);
User.hasMany(Category, { foreignKey: "userId" });
Category.belongsTo(User);
Category.hasMany(Transaction, { foreignKey: "categoryId" });
Transaction.belongsTo(Category);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
