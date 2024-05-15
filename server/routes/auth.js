// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const Login = require('../models/Login');

// POST /api/login
router.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Your login logic here (e.g., check username and password)

  // Example: find a user by username and check password
  try {
    const user = await Login.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // Login successful
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
