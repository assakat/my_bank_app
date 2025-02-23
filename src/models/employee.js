const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Import database connection

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT, // Match SQL's TEXT type
      allowNull: false,
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    hired_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Match DEFAULT CURRENT_DATE
    },
  },
  {
    tableName: "employees", // Ensure Sequelize uses your exact table name
    timestamps: false, // Disable createdAt & updatedAt
  }
);

module.exports = Employee;
