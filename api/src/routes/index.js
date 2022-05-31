const { Router, request, response } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("hola hollaaa");
});

router.get("/idcuenta", (req, res) => {
  console.log(req.headers);
  const variable = req.body;
  res.send(variable);
});
module.exports = router;
