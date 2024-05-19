const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Updated from bcrypt to bcryptjs
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure this path is correct
const { jwtSecret } = require('../config');

router.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Both fields are required' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
    res.json({ user: { username: user.username }, token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
