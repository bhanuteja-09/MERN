const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const { mongoURI } = require('./config'); // Ensure this path is correct

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  designation: String,
  gender: String,
  course: String,
  image: String
});

const Employee = mongoose.model('Employee', employeeSchema);

app.post('/api/employees/create', upload.single('image'), async (req, res) => {
  const { name, email, mobile, designation, gender, course } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !email || !mobile || !designation || !gender || !course || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newEmployee = new Employee({ name, email, mobile, designation, gender, course, image });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    console.error('Error saving employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/uploads', express.static(uploadDir));

const authRoutes = require('./routes/auth');
app.use(authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
