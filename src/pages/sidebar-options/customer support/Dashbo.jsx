import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layoutdesign from '../../Layout/Layoutdesign';
import '../../../Styles/customerCare.css';

const faqs = [
  { question: 'How do I track my order?', answer: 'You can track your order by clicking on the tracking link sent to your email.' },
  { question: 'What is the return policy?', answer: 'Our return policy allows you to return products within 30 days of purchase.' },
  { question: 'How do I contact customer support?', answer: 'You can contact customer support through our live chat or contact us page.' },
  // Add more FAQs here
];

const Dashbo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleLiveChatClick = () => {
    navigate('/chatbot');
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layoutdesign>
      <div className="support-container">
        <h1>Customer Support</h1>
        <p>Welcome to our customer support page. How can we assist you today?</p>

        <div className="support-options">
          <div className="option faq-option">
            <h2>FAQs</h2>
            <div className="faq-section">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(index)}>
                    {faq.question}
                    <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
                  </button>
                  <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="option contact-option">
            <h2>Contact Us</h2>
            <p>Get in touch with our support team.</p>
          </div>
          <div className="option chat-option" onClick={handleLiveChatClick}>
            <h2>Live Chat</h2>
            <p>Chat with a support representative.</p>
          </div>
        </div>
      </div>
    </Layoutdesign>
  );
};

export default Dashbo;
