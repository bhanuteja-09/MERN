// server/routes/employee.js

const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const auth = require('../middleware/auth');

// Create employee route
router.post('/', auth, async (req, res) => {
  try {
    const employeeData = req.body;
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update employee route
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const employeeData = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, employeeData, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(updatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
