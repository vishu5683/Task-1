import React, { useState } from 'react';
import '../Styles/chatbot.css';
import Layoutdesign from './Layout/Layoutdesign';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = generateBotResponse(input);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    let botResponse = '';

    if (userInput.toLowerCase().includes('hello')) {
      botResponse = 'Hi there! How can I help you today?';
    } else if (userInput.toLowerCase().includes('help')) {
      botResponse = 'Sure, I am here to help you. What do you need assistance with?';
    } else if (userInput.toLowerCase().includes('price')) {
      botResponse = 'The price of our product is $99.99.';
    } else {
      botResponse = 'I am not sure how to respond to that. Can you please rephrase?';
    }

    return { text: botResponse, sender: 'bot' };
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Layoutdesign>
      <div className="chatbot-container">
        <div className="chat-header">Chatbot</div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <div className="content">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </Layoutdesign>
  );
}

export default Chatbot;
