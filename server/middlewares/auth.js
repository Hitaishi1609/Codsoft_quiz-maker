const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.isAuthenticated = async (req, res, next) => {
  const {token} = req.cookies;
  console.log("token", token)

  if (!token) return res.status(401).json({ message: "Not Logged In" });

  const decoded = jwt.verify(token, "secret");

  req.user = await User.findById(decoded._id);

  next();
};