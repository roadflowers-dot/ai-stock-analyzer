import sys
import json
from datetime import datetime

def analyze_stock(stock_data, user_profile):
    """
    AI analysis function for stock recommendation
    """
    try:
        time_series = stock_data.get('Time Series (Daily)', {})
        
        if not time_series:
            return {'error': 'No data available'}
        
        # Extract recent prices
        dates = sorted(time_series.keys())[-10:]
        prices = [float(time_series[date]['4. close']) for date in dates]
        
        # Calculate indicators
        avg_price = sum(prices) / len(prices)
        current_price = prices[-1]
        trend = 'UP' if current_price > avg_price else 'DOWN'
        volatility = max(prices) - min(prices)
        
        # Generate recommendation
        recommendation = {
            'symbol': stock_data.get('Meta Data', {}).get('2. Symbol', 'N/A'),
            'current_price': current_price,
            'avg_price': avg_price,
            'trend': trend,
            'volatility': volatility,
            'action': 'BUY' if trend == 'UP' and volatility < 50 else 'SELL' if trend == 'DOWN' else 'HOLD',
            'confidence': 0.75,
            'timestamp': datetime.now().isoformat()
        }
        
        return recommendation
    except Exception as e:
        return {'error': str(e)}

if __name__ == '__main__':
    stock_data = json.loads(sys.argv[1])
    user_profile = json.loads(sys.argv[2])
    result = analyze_stock(stock_data, user_profile)
    print(json.dumps(result))
