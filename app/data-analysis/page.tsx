'use client';

import StockChart from '@/components/StockChart';
import PortfolioChart from '@/components/PortfolioChart';
import BarChart from '@/components/BarChart';

export default function DataAnalysis() {
  const stockData = [
    { date: 'Jan', price: 15000 },
    { date: 'Feb', price: 15500 },
    { date: 'Mar', price: 15200 },
    { date: 'Apr', price: 16000 },
    { date: 'May', price: 16800 },
    { date: 'Jun', price: 17200 },
    { date: 'Jul', price: 17500 },
    { date: 'Aug', price: 18000 },
    { date: 'Sep', price: 17800 },
    { date: 'Oct', price: 18500 },
    { date: 'Nov', price: 19200 },
    { date: 'Dec', price: 19800 },
  ];

  const portfolioData = [
    { name: 'Equity', value: 45 },
    { name: 'Debt', value: 25 },
    { name: 'Gold', value: 15 },
    { name: 'Real Estate', value: 10 },
    { name: 'Cash', value: 5 },
  ];

  const sectorData = [
    { name: 'IT', value: 25 },
    { name: 'Banking', value: 20 },
    { name: 'Pharma', value: 15 },
    { name: 'Auto', value: 12 },
    { name: 'FMCG', value: 10 },
    { name: 'Energy', value: 18 },
  ];

  const monthlyReturns = [
    { date: 'Jan', price: 5.2 },
    { date: 'Feb', price: 3.3 },
    { date: 'Mar', price: -1.9 },
    { date: 'Apr', price: 5.3 },
    { date: 'May', price: 5.0 },
    { date: 'Jun', price: 2.4 },
    { date: 'Jul', price: 1.7 },
    { date: 'Aug', price: 2.9 },
    { date: 'Sep', price: -1.1 },
    { date: 'Oct', price: 3.9 },
    { date: 'Nov', price: 3.8 },
    { date: 'Dec', price: 3.1 },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Analysis Dashboard</h1>
          <p className="text-xl text-blue-200">
            Interactive charts and insights for informed decision making
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Market Index</h3>
              <div className="text-3xl font-bold">19,842.50</div>
              <div className="text-sm mt-2 flex items-center">
                <span className="text-green-300">↑ 2.45%</span>
                <span className="ml-2">Today</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Portfolio Value</h3>
              <div className="text-3xl font-bold">₹12,45,000</div>
              <div className="text-sm mt-2 flex items-center">
                <span className="text-green-300">↑ 8.5%</span>
                <span className="ml-2">This Month</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Annual Returns</h3>
              <div className="text-3xl font-bold">32.0%</div>
              <div className="text-sm mt-2 flex items-center">
                <span className="text-green-300">↑ 5.2%</span>
                <span className="ml-2">vs Last Year</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <StockChart data={stockData} title="Market Index Trend (2024)" />
            <StockChart data={monthlyReturns} title="Monthly Returns (%)" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <PortfolioChart data={portfolioData} title="Portfolio Allocation" />
            <BarChart data={sectorData} title="Sector-wise Investment (%)" color="#3b82f6" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Market Trend</h3>
                <p className="text-gray-600">
                  The market has shown consistent upward momentum with a 32% annual return. 
                  Technical indicators suggest continued bullish sentiment.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Portfolio Performance</h3>
                <p className="text-gray-600">
                  Well-diversified portfolio with 45% equity allocation showing strong performance. 
                  Risk-adjusted returns are above market average.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Sector Analysis</h3>
                <p className="text-gray-600">
                  IT and Banking sectors leading the portfolio with 45% combined allocation. 
                  Energy sector showing promising growth potential.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Risk Assessment</h3>
                <p className="text-gray-600">
                  Current portfolio volatility is moderate with good downside protection. 
                  Recommended to maintain current allocation strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Educational Purpose Only</h3>
              <p className="text-gray-700">
                All data, charts, and analysis presented here are for educational purposes only. 
                This is not investment advice. We are not SEBI registered advisors. 
                Please consult with a certified financial advisor before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
