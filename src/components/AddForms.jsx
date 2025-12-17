import React, { useState } from 'react';
import './AddForms.css';

const AddForms = ({ onAddUser, onAddEvent, onAddContribution, onBack }) => {
  const [activeForm, setActiveForm] = useState('');
  const [formData, setFormData] = useState({
    // User form data
    userName: '',
    userEmail: '',
    userRole: 'member',
    userPassword: '',
    
    // Event form data
    eventName: '',
    eventDate: '',
    eventTheme: '',
    eventDescription: '',
    
    // Contribution form data
    contributionName: '',
    contributionAmount: '',
    contributionDueDate: '',
    contributionEvent: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (onAddUser) {
      onAddUser({
        name: formData.userName,
        email: formData.userEmail,
        role: formData.userRole,
        password: formData.userPassword
      });
      
      // Reset form
      setFormData(prev => ({
        ...prev,
        userName: '',
        userEmail: '',
        userRole: 'member',
        userPassword: ''
      }));
      
      alert('Utilisateur ajouté avec succès!');
    }
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (onAddEvent) {
      onAddEvent({
        name: formData.eventName,
        date: formData.eventDate,
        theme: formData.eventTheme,
        description: formData.eventDescription
      });
      
      // Reset form
      setFormData(prev => ({
        ...prev,
        eventName: '',
        eventDate: '',
        eventTheme: '',
        eventDescription: ''
      }));
      
      alert('Événement ajouté avec succès!');
    }
  };

  const handleSubmitContribution = (e) => {
    e.preventDefault();
    if (onAddContribution) {
      onAddContribution({
        name: formData.contributionName,
        amount: parseFloat(formData.contributionAmount),
        dueDate: formData.contributionDueDate,
        event: formData.contributionEvent
      });
      
      // Reset form
      setFormData(prev => ({
        ...prev,
        contributionName: '',
        contributionAmount: '',
        contributionDueDate: '',
        contributionEvent: ''
      }));
      
      alert('Cotisation ajoutée avec succès!');
    }
  };

  const renderUserForm = () => (
    <form onSubmit={handleSubmitUser} className="add-form">
      <h3>Ajouter un Nouvel Utilisateur</h3>
      <div className="form-group">
        <label htmlFor="userName">Nom complet:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="userRole">Rôle:</label>
        <select
          id="userRole"
          name="userRole"
          value={formData.userRole}
          onChange={handleInputChange}
        >
          <option value="member">Membre</option>
          <option value="admin">Administrateur</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="userPassword">Mot de passe:</label>
        <input
          type="password"
          id="userPassword"
          name="userPassword"
          value={formData.userPassword}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-btn">Ajouter Utilisateur</button>
        <button type="button" onClick={() => setActiveForm('')} className="cancel-btn">Annuler</button>
      </div>
    </form>
  );

  const renderEventForm = () => (
    <form onSubmit={handleSubmitEvent} className="add-form">
      <h3>Ajouter un Nouvel Événement</h3>
      <div className="form-group">
        <label htmlFor="eventName">Nom de l'événement:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={formData.eventName}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="eventDate">Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="eventTheme">Thème:</label>
        <input
          type="text"
          id="eventTheme"
          name="eventTheme"
          value={formData.eventTheme}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="eventDescription">Description:</label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleInputChange}
          rows="4"
        ></textarea>
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-btn">Ajouter Événement</button>
        <button type="button" onClick={() => setActiveForm('')} className="cancel-btn">Annuler</button>
      </div>
    </form>
  );

  const renderContributionForm = () => (
    <form onSubmit={handleSubmitContribution} className="add-form">
      <h3>Ajouter une Nouvelle Cotisation</h3>
      <div className="form-group">
        <label htmlFor="contributionName">Nom de la cotisation:</label>
        <input
          type="text"
          id="contributionName"
          name="contributionName"
          value={formData.contributionName}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="contributionAmount">Montant (€):</label>
        <input
          type="number"
          id="contributionAmount"
          name="contributionAmount"
          value={formData.contributionAmount}
          onChange={handleInputChange}
          min="0"
          step="0.01"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="contributionDueDate">Date d'échéance:</label>
        <input
          type="date"
          id="contributionDueDate"
          name="contributionDueDate"
          value={formData.contributionDueDate}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="contributionEvent">Événement associé:</label>
        <input
          type="text"
          id="contributionEvent"
          name="contributionEvent"
          value={formData.contributionEvent}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-btn">Ajouter Cotisation</button>
        <button type="button" onClick={() => setActiveForm('')} className="cancel-btn">Annuler</button>
      </div>
    </form>
  );

  return (
    <div className="add-forms-container">
      <div className="forms-header">
        <h2>Gestion des Ajouts</h2>
        <button onClick={onBack} className="back-button">
          ← Retour
        </button>
      </div>
      
      {!activeForm ? (
        <div className="form-selector">
          <h3>Que souhaitez-vous ajouter ?</h3>
          <div className="form-options">
            <button 
              className="form-option-btn" 
              onClick={() => setActiveForm('user')}
            >
              <span className="icon">👤</span>
              <span>Ajouter un Utilisateur</span>
            </button>
            
            <button 
              className="form-option-btn" 
              onClick={() => setActiveForm('event')}
            >
              <span className="icon">📅</span>
              <span>Ajouter un Événement</span>
            </button>
            
            <button 
              className="form-option-btn" 
              onClick={() => setActiveForm('contribution')}
            >
              <span className="icon">💰</span>
              <span>Ajouter une Cotisation</span>
            </button>
          </div>
        </div>
      ) : activeForm === 'user' ? renderUserForm() : 
        activeForm === 'event' ? renderEventForm() : 
        activeForm === 'contribution' ? renderContributionForm() : null}
    </div>
  );
};

export default AddForms;