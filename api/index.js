const express = require("express");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(3004, () => console.log("Server up on port 3004"));
});
