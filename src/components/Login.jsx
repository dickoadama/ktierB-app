import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onShowRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    // Simulate login process
    // In a real app, this would be an API call
    setTimeout(() => {
      // For demo purposes, accept any non-empty credentials
      const userData = {
        id: Date.now(), // Generate a simple ID
        name: email.split('@')[0], // Use email prefix as name
        email: email,
        role: email === 'admin@association.fr' ? 'admin' : 'member'
      };
      onLogin(userData);
    }, 1000);
  };

  return (
    <div className="login-container zoom-in">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit" className="login-btn">Se connecter</button>
        <p className="register-link">
          Pas encore membre?{' '}
          <button type="button" onClick={onShowRegistration} className="link-button">
            S'inscrire
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;