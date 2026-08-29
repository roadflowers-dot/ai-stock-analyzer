const express = require('express');
const router = express.Router();
const axios = require('axios');
const { PythonShell } = require('python-shell');

// Get AI recommendation for a stock
router.post('/analyze', async (req, res) => {
  try {
    const { symbol, userProfile } = req.body;

    // Fetch stock data
    const stockData = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_KEY}`
    );

    // Call Python AI analysis
    const options = {
      mode: 'text',
      pythonOptions: ['-u'],
      scriptPath: './ai',
      args: [JSON.stringify(stockData.data), JSON.stringify(userProfile)]
    };

    PythonShell.run('analyzer.py', options, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ recommendation: JSON.parse(results[0]) });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get portfolio recommendations
router.post('/portfolio', (req, res) => {
  const { portfolio } = req.body;
  res.json({ recommendations: 'Analyzing portfolio...' });
});

module.exports = router;
