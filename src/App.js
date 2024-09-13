// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './HomePage';
import ContactForm from './ContactForm';

function App() {
  const [messages, setMessages] = useState(() => {
    // Inicijalizacija poruka iz lokalne memorije
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    // Spremanje poruka u lokalnu memoriju kad se niz poruka promijeni
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="App">
      <HomePage />
      <ContactForm addMessage={addMessage} />
    </div>
  );
}

export default App;
