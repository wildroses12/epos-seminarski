 
import React, { useState } from 'react';
import './ContactForm.css';  

function Login({ addUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    addUser(newUser);
    // Resetiranje forme
    setUsername('');
    setPassword('');
  };

  return (
    <div className="contact-form-section">
      <div className="form-container">
        <h2>Prijavite se</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Korisničko ime"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Prijava</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
