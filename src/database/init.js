const sequelize = require("../config/db");
const Destination = require("../models/Destination");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Hardcoded destinations
  await Destination.bulkCreate([
    {
      name: "Mount Everest Base Camp",
      description: "A trekking experience to the world's highest peak.",
      image_url: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
      tags: "adventure,natural",
    },
    {
      name: "Pashupatinath Temple",
      description: "A UNESCO World Heritage Hindu temple in Kathmandu.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pashupatinath_Temple-2020.jpg/1024px-Pashupatinath_Temple-2020.jpg",
      tags: "cultural,spiritual",
    },
  ]);

  // Hardcoded admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await User.create({ username: "admin", password: hashedPassword });

  console.log("Database initialized with sample data.");
};

seedDatabase();
