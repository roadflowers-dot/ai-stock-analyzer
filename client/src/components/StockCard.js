import React from 'react';
import './StockCard.css';

function StockCard({ stock }) {
  const quote = stock['Global Quote'] || {};
  const price = parseFloat(quote['05. price']) || 0;
  const change = parseFloat(quote['09. change']) || 0;
  const changePercent = quote['10. change percent'] || '0%';

  return (
    <div className="stock-card">
      <h3>{quote['01. symbol'] || 'N/A'}</h3>
      <div className="price">${price.toFixed(2)}</div>
      <div className={`change ${change >= 0 ? 'positive' : 'negative'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change).toFixed(2)} ({changePercent})
      </div>
      <small>Open: ${quote['02. open']}</small>
      <small>High: ${quote['03. high']}</small>
      <small>Low: ${quote['04. low']}</small>
    </div>
  );
}

export default StockCard;
