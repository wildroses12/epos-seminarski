import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import ProductList from './ProductList';
const products = [
  {
    id: 1,
    name: 'Svečana haljina',
    description: 'Elegantna crna haljina za posebne prilike.',
    price: '120.00',
    image: 'https://i.imgur.com/1.jpg', // Zamijenite sa pravim URL-ovima
  },
  {
    id: 2,
    name: 'Kožna jakna',
    description: 'Moderna kožna jakna od prave kože.',
    price: '250.00',
    image: 'https://i.imgur.com/2.jpg',
  },
  {
    id: 3,
    name: 'Farmerke',
    description: 'Udobne i moderne farmerke slim fit kroja.',
    price: '80.00',
    image: 'https://i.imgur.com/3.jpg',
  },
  {
    id: 4,
    name: 'Sportske patike',
    description: 'Lagane patike idealne za trčanje i trening.',
    price: '95.00',
    image: 'https://i.imgur.com/4.jpg',
  },
  {
    id: 5,
    name: 'Sunčane naočare',
    description: 'Stilske sunčane naočare sa UV zaštitom.',
    price: '60.00',
    image: 'https://i.imgur.com/5.jpg',
  },
];

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
           <Route path="/proizvodi" element={<ProductList products={products} />} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
