export default function Services() {
  const services = [
    {
      title: "Technical Analysis",
      description: "In-depth technical analysis using chart patterns, indicators, and price action strategies.",
      features: [
        "Chart pattern recognition",
        "Support and resistance levels",
        "Trend analysis",
        "Volume analysis",
        "Technical indicators (RSI, MACD, Moving Averages)"
      ]
    },
    {
      title: "Fundamental Analysis",
      description: "Comprehensive fundamental analysis to evaluate company performance and intrinsic value.",
      features: [
        "Financial statement analysis",
        "Ratio analysis",
        "Industry comparison",
        "Management evaluation",
        "Growth potential assessment"
      ]
    },
    {
      title: "Market Research",
      description: "Detailed market research and sector analysis to identify opportunities and risks.",
      features: [
        "Sector performance tracking",
        "Market trend identification",
        "Economic indicator analysis",
        "Global market correlation",
        "Risk assessment"
      ]
    },
    {
      title: "Portfolio Analysis",
      description: "Comprehensive portfolio review and optimization strategies for better returns.",
      features: [
        "Asset allocation review",
        "Risk-return optimization",
        "Diversification analysis",
        "Performance benchmarking",
        "Rebalancing recommendations"
      ]
    },
    {
      title: "Educational Workshops",
      description: "Interactive learning sessions on trading strategies and investment principles.",
      features: [
        "Trading strategy workshops",
        "Risk management training",
        "Technical analysis courses",
        "Investment psychology",
        "Live market sessions"
      ]
    },
    {
      title: "Data Visualization",
      description: "Advanced data visualization tools to understand complex market data easily.",
      features: [
        "Interactive charts and graphs",
        "Real-time data updates",
        "Custom dashboard creation",
        "Comparative analysis tools",
        "Export and reporting features"
      ]
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-200">
            Comprehensive finance services for traders and investors
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Educational Focus</h3>
                <p className="text-blue-200">
                  All our services are designed for educational purposes to help you learn and grow as an investor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-blue-200">
                  We use comprehensive data analysis and proven methodologies to provide valuable insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Approach</h3>
                <p className="text-blue-200">
                  We maintain transparency in our analysis and clearly state that we are not SEBI registered advisors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
