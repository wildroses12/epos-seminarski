// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactForm from './ContactForm';
import Navbar from './Navbar';

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
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm addMessage={addMessage} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
