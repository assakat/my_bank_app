const EmployeeService = require("./emp.service");

class EmployeeController {
  async getAllEmployees(req, res) {
    const employees = await EmployeeService.getAllEmployees();
    res.json(employees);
  }

  async getEmployeeById(req, res) {
    const employee = await EmployeeService.getEmployeeById(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  }

  async createEmployee(req, res) {
    const { name, position, salary, hired_date } = req.body;
    const employee = await EmployeeService.createEmployee({ name, position, salary, hired_date });
    res.status(201).json(employee);
  }

  async updateEmployee(req, res) {
    const updatedEmployee = await EmployeeService.updateEmployee(req.params.id, req.body);
    if (!updatedEmployee) return res.status(404).json({ error: "Employee not found" });
    res.json(updatedEmployee);
  }

  async deleteEmployee(req, res) {
    const deleted = await EmployeeService.deleteEmployee(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Employee not found" });
    res.json({ message: "Employee deleted successfully" });
  }
}

module.exports = new EmployeeController();
