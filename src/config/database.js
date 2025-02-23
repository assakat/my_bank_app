const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load .env variables

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASS, // Password
  {
    host: process.env.DB_HOST, // Host (e.g., localhost)
    dialect: "postgres", // Use PostgreSQL
    logging: false, // Disable logging
  }
);

module.exports = sequelize;
