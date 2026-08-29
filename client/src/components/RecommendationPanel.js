import React from 'react';
import './RecommendationPanel.css';

function RecommendationPanel({ recommendations }) {
  const rec = recommendations.recommendation || {};

  const getActionColor = (action) => {
    switch (action) {
      case 'BUY':
        return 'buy';
      case 'SELL':
        return 'sell';
      default:
        return 'hold';
    }
  };

  return (
    <div className="recommendation-panel">
      <h2>AI Recommendation</h2>
      <div className={`recommendation ${getActionColor(rec.action)}`}>
        <div className="action">{rec.action}</div>
        <div className="confidence">Confidence: {(rec.confidence * 100).toFixed(0)}%</div>
      </div>
      <div className="details">
        <p><strong>Current Price:</strong> ${rec.current_price?.toFixed(2)}</p>
        <p><strong>Avg Price (10d):</strong> ${rec.avg_price?.toFixed(2)}</p>
        <p><strong>Trend:</strong> {rec.trend}</p>
        <p><strong>Volatility:</strong> ${rec.volatility?.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default RecommendationPanel;
