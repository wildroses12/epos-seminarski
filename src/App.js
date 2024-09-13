import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';

function App() {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const loginUser = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar currentUser={currentUser} logoutUser={logoutUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contact"
            element={<ContactForm addMessage={addMessage} />}
          />
          <Route
            path="/login"
            element={<Login loginUser={loginUser} />}
          />
          <Route
            path="/register"
            element={<Register addUser={addUser} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
