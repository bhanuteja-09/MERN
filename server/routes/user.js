const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example route - adjust based on your actual routes
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
