import React, { useState } from 'react';
import './Registration.css';

const Registration = ({ onRegistrationComplete, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    
    // Simulate registration process
    // In a real app, this would be an API call
    setTimeout(() => {
      const userData = {
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        role: 'member'
      };
      onRegistrationComplete(userData);
    }, 1000);
  };

  return (
    <div className="registration-container flip-in">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Prénom *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Votre prénom"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Nom *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Mot de passe *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Choisissez un mot de passe"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmez votre mot de passe"
            required
          />
        </div>
        
        <div className="form-buttons">
          <button type="button" onClick={onCancel} className="cancel-btn">Annuler</button>
          <button type="submit" className="register-btn">S'inscrire</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;