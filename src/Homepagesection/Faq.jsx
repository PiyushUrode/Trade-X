
import "../Style/Faq.css"
import React, { useState } from 'react';

const faqData = [
    {
        question: "What is cryptocurrency trading?",
        answer: "Cryptocurrency trading involves buying and selling digital assets such as Bitcoin or Ethereum to make a profit.",
      },
      {
        question: "How does margin trading work?",
        answer: "Margin trading allows you to borrow funds from an exchange to trade assets, which can increase potential gains but also risks.",
      },
      {
        question: "What are trading pairs?",
        answer: "Trading pairs, such as BTC/USD, represent the exchange rate between two different assets and are used in trading.",
      },
      {
        question: "How can I manage trading risks?",
        answer: "You can manage trading risks by setting stop-loss orders, diversifying your portfolio, and not investing more than you can afford to lose.",
      },
      {
        question: "What is technical analysis in trading?",
        answer: "Technical analysis involves studying price charts and patterns to predict future price movements based on historical data.",
      },
      {
        question: "How do I choose a cryptocurrency exchange?",
        answer: "When choosing a cryptocurrency exchange, consider factors like security, fees, liquidity, and available cryptocurrencies.",
      },
      {
        question: "What are trading bots?",
        answer: "Trading bots are automated software that can execute trades on your behalf based on predetermined strategies.",
      },
      {
        question: "What is a stop-loss order?",
        answer: "A stop-loss order is a trade order placed to sell an asset when it reaches a certain price, helping minimize losses.",
      },
      {
        question: "What is day trading?",
        answer: "Day trading involves buying and selling assets within the same day, aiming to profit from short-term price movements.",
      },
      {
        question: "What are candlestick charts?",
        answer: "Candlestick charts are a technical analysis tool used to visualize price movements over time, with each candlestick representing an open, close, high, and low price.",
      },
    ];


const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    // Function to handle question click
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle active question
    };
  
    return (
      <div className="faq-container">
        <h1>Frequently <span className="text-green-800"  > Asked Questions </span> </h1>
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => handleClick(index)}>
                <h3>{item.question}</h3>
                <span className="plus-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Faq