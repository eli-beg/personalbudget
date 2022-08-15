const jwt = require("jsonwebtoken");
const { verifyUser } = require("../utils/verifyUser");
const { User } = require("../db");

const validateAuth = async (req, res, next) => {
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const findedUser = await User.findOne({
        where: { id: aprobedUser.id, status: "active" },
      });
      if (findedUser) {
        next();
      }
    }
  } catch {
    res.status(401).json({
      ok: false,
      msg: "Invalid authentication",
    });
  }
};

module.exports = { validateAuth };
