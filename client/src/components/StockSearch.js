import React, { useState } from 'react';
import './StockSearch.css';

function StockSearch({ onSearch, loading }) {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol.trim()) {
      onSearch(symbol.toUpperCase());
      setSymbol('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stock-search">
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., AAPL, GOOGL, MSFT)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
    </form>
  );
}

export default StockSearch;
