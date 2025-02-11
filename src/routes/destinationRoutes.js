const express = require("express");
const { getAllDestinations, getDestinationById, createDestination } = require("../controllers/destinationController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getAllDestinations);
router.get("/:id", getDestinationById);
router.post("/", authenticate, createDestination);

module.exports = router;
