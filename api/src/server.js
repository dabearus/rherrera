require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'checador-api'
  });
});

app.post('/api/punches/check-in', async (req, res) => {
  res.json({
    success: true,
    message: 'Check-in registrado'
  });
});

app.post('/api/punches/check-out', async (req, res) => {
  res.json({
    success: true,
    message: 'Check-out registrado'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
