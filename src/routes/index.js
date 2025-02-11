const express = require("express");

const destinationRoutes = require("./destinationRoutes");
const authRoutes = require("./authRoutes");

const router = express.Router();

// Define all routes here
router.use("/destinations", destinationRoutes);
router.use("/auth", authRoutes);

module.exports = router;
