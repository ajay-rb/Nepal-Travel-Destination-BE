const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.authenticateUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
