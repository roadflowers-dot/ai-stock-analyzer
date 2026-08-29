# AI Stock Analyzer

Real-time stock analysis platform with AI-powered personalized recommendations.

## Features

- 📊 Real-time stock price tracking
- 🤖 AI-powered stock analysis and recommendations
- 📈 Technical indicators (moving averages, volatility)
- 👤 Personalized recommendations based on user profile
- 🎯 BUY/SELL/HOLD signals with confidence scores
- 📱 Responsive web interface

## Tech Stack

**Backend:**
- Node.js + Express
- Python (AI analysis)
- Alpha Vantage API (stock data)

**Frontend:**
- React 18
- CSS3
- Axios

## Setup

### 1. Clone & Install

```bash
git clone https://github.com/roadflowers-dot/ai-stock-analyzer.git
cd ai-stock-analyzer
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env
```

Add your API keys:
```
ALPHA_VANTAGE_KEY=your_key_here
PORT=5000
```

Get free API key: https://www.alphavantage.co/

### 3. Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

### 4. Run Backend

```bash
npm run dev
```

Server will run on `http://localhost:5000`

### 5. Run Frontend (new terminal)

```bash
cd client
npm start
```

App will open at `http://localhost:3000`

## API Endpoints

### Stock Data
- `GET /api/stocks/live/:symbol` - Real-time quote
- `GET /api/stocks/intraday/:symbol` - 5-min interval data
- `GET /api/stocks/daily/:symbol` - Daily data

### Recommendations
- `POST /api/recommendations/analyze` - Get AI recommendation
- `POST /api/recommendations/portfolio` - Analyze portfolio

## Next Steps

- [ ] Add sentiment analysis (news/social media)
- [ ] Implement user authentication
- [ ] Create portfolio tracking
- [ ] Add machine learning models (TensorFlow)
- [ ] Implement WebSocket for live updates
- [ ] Add database (MongoDB)
- [ ] Deploy to production

## License

MIT
