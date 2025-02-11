const Destination = require("../models/Destination");
const { Op } = require("sequelize");

exports.getAllDestinations = async (tags) => {
  let filter = {};
  if (tags) {
    filter.tags = { [Op.like]: `%${tags}%` }; // Filter by tags
  }
  return await Destination.findAll({ where: filter });
};

exports.getDestinationById = async (id) => {
  return await Destination.findByPk(id);
};

exports.createDestination = async (data) => {
  return await Destination.create(data);
};
