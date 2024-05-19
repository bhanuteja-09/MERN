const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Error: Images Only!'));
    }
  }
});

// Route to create an employee
router.post('/create', upload.single('image'), async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course } = req.body;

    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const newEmployee = new Employee({
      name,
      email,
      mobile,
      designation,
      gender,
      course,
      image: req.file.path
    });

    await newEmployee.save();

    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
