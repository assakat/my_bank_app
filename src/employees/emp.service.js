const Employee = require("../models/employee");

class EmployeeService {
  async getAllEmployees() {
    return await Employee.findAll();
  }

  async getEmployeeById(id) {
    return await Employee.findByPk(id);
  }

  async createEmployee(data) {
    return await Employee.create(data);
  }

  async updateEmployee(id, data) {
    const employee = await Employee.findByPk(id);
    if (!employee) return null;
    return await employee.update(data);
  }

  async deleteEmployee(id) {
    const employee = await Employee.findByPk(id);
    if (!employee) return false;
    await employee.destroy();
    return true;
  }
}

module.exports = new EmployeeService();
