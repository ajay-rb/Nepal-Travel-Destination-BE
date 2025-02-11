const destinationService = require("../services/destinationService");

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await destinationService.getAllDestinations(req.query.tags);
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getDestinationById = async (req, res) => {
  try {
    const destination = await destinationService.getDestinationById(req.params.id);
    if (!destination) return res.status(404).json({ message: "Not found" });
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.createDestination = async (req, res) => {
  try {
    const newDestination = await destinationService.createDestination(req.body);
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
