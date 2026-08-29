import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import StockSearch from './components/StockSearch';
import StockCard from './components/StockCard';
import RecommendationPanel from './components/RecommendationPanel';

function App() {
  const [stocks, setStocks] = useState([]);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchStock = async (symbol) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/stocks/live/${symbol}`);
      setStocks([...stocks, response.data]);
      
      // Get AI recommendation
      const recResponse = await axios.post('http://localhost:5000/api/recommendations/analyze', {
        symbol: symbol,
        userProfile: { riskTolerance: 'medium', investmentType: 'long-term' }
      });
      setRecommendations(recResponse.data);
    } catch (error) {
      console.error('Error fetching stock:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Stock Analyzer</h1>
        <p>Real-time stock analysis with personalized AI recommendations</p>
      </header>
      
      <main className="container">
        <StockSearch onSearch={handleSearchStock} loading={loading} />
        
        <div className="content">
          <div className="stocks-section">
            <h2>Tracked Stocks</h2>
            <div className="stocks-grid">
              {stocks.map((stock, idx) => (
                <StockCard key={idx} stock={stock} />
              ))}
            </div>
          </div>
          
          {recommendations && (
            <RecommendationPanel recommendations={recommendations} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
