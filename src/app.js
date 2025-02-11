const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const routes = require("./routes");
const errorHandlers = require("./middlewares/errorHandlers");
require("dotenv").config();
require("express-async-errors");

const app = express();

// ✅ Security Middleware
app.use(helmet()); 
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" })); 
app.use(xss()); 

// ✅ Performance Middleware
app.use(compression()); 
app.use(morgan("dev")); 

// ✅ Rate Limiting: Limits requests per minute to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api", limiter);

// ✅ Request Body Parsing
app.use(bodyParser.json({ limit: "10kb" })); // Limits body size to prevent DOS attacks
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api", routes); // Use the new routes index

// ✅ Global Error Handling Middleware
app.use(errorHandlers);

// ✅ Graceful Shutdown Handling
process.on("SIGINT", () => {
  console.log("\nShutting down server gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\nServer terminating...");
  process.exit(0);
});

module.exports = app;
