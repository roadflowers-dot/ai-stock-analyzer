const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stockRoutes = require('./routes/stocks');
const recommendationRoutes = require('./routes/recommendations');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/stocks', stockRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'AI Stock Analyzer API Running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
