require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database"); // Import database connection
const Employee = require("./models/employee"); // Import model
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(express.json());


// Ensure database connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Database connection failed:", err));

// Sample route
app.get("/", (req, res) => res.send("API is running"));

app.use("/employees", employeeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
