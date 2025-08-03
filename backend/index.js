const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// api routes
app.get('/info', (req, res) => {
  res.json({msg: "welcome to express API", code: 200, description: "This is a simple Express API endpoint."});
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === '123456') {
    res.json({ message: 'Login successful', user: { name: 'Test User' } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(3000, () => {
    console.log('Backend running on http://localhost port 3000');
});