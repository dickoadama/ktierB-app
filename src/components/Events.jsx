import React, { useState } from 'react';
import './Events.css';

const Events = ({ isAdmin }) => {
  const [events, setEvents] = useState([
    { 
      id: 1, 
      title: 'Assemblée Générale', 
      date: '2026-01-15', 
      theme: 'Gouvernance',
      description: 'Assemblée générale annuelle de l\'association',
      participants: 45,
      maxParticipants: 100
    },
    { 
      id: 2, 
      title: 'Repas de Noël', 
      date: '2025-12-20', 
      theme: 'Social',
      description: 'Repas festif de fin d\'année',
      participants: 32,
      maxParticipants: 50
    },
    { 
      id: 3, 
      title: 'Tournoi Sportif', 
      date: '2026-03-10', 
      theme: 'Sport',
      description: 'Tournoi amical entre membres',
      participants: 18,
      maxParticipants: 30
    }
  ]);

  const [themes] = useState([
    'Social', 'Sport', 'Culturel', 'Éducatif', 'Gouvernance', 'Bienfaisance', 'Technologie'
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    theme: 'Social',
    description: '',
    maxParticipants: 20
  });

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const event = {
      id: events.length + 1,
      ...newEvent,
      participants: 0
    };
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      date: '',
      theme: 'Social',
      description: '',
      maxParticipants: 20
    });
    setShowCreateForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleParticipate = (eventId) => {
    setEvents(events.map(event => {
      if (event.id === eventId && event.participants < event.maxParticipants) {
        return { ...event, participants: event.participants + 1 };
      }
      return event;
    }));
  };

  return (
    <div className="events-container">
      {/* Éléments flotnants spécifiques aux événements */}
      <div className="event-floating-element floating-icon-1">🎉</div>
      <div className="event-floating-element floating-icon-2">📅</div>
      <div className="event-floating-element floating-icon-3">👥</div>
      
      <h2>Événements</h2>
      
      {isAdmin && (
        <div className="events-controls">
          <button 
            className="create-event-btn"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? 'Annuler' : 'Créer un événement'}
          </button>
        </div>
      )}

      {showCreateForm && isAdmin && (
        <div className="create-event-form slide-in-up">
          <h3>Créer un nouvel événement</h3>
          <form onSubmit={handleCreateEvent}>
            <div className="form-group">
              <label htmlFor="title">Titre:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="theme">Thème:</label>
              <select
                id="theme"
                name="theme"
                value={newEvent.theme}
                onChange={handleInputChange}
              >
                {themes.map(theme => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="maxParticipants">Participants maximum:</label>
              <input
                type="number"
                id="maxParticipants"
                name="maxParticipants"
                value={newEvent.maxParticipants}
                onChange={handleInputChange}
                min="1"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
                rows="3"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Créer l'événement</button>
          </form>
        </div>
      )}

      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card bounce-in">
            <div className="event-theme-tag" style={{
              backgroundColor: getThemeColor(event.theme)
            }}>
              {event.theme}
            </div>
            
            <h3>{event.title}</h3>
            <p className="event-date">{new Date(event.date).toLocaleDateString('fr-FR')}</p>
            <p className="event-description">{event.description}</p>
            
            <div className="event-participants">
              <span>Participants: {event.participants}/{event.maxParticipants}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {!isAdmin && (
              <button 
                className="participate-btn"
                onClick={() => handleParticipate(event.id)}
                disabled={event.participants >= event.maxParticipants}
              >
                {event.participants >= event.maxParticipants ? 'Complet' : 'Participer'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Fonction pour obtenir une couleur basée sur le thème
const getThemeColor = (theme) => {
  const colors = {
    'Social': '#3498db',
    'Sport': '#2ecc71',
    'Culturel': '#9b59b6',
    'Éducatif': '#f39c12',
    'Gouvernance': '#e74c3c',
    'Bienfaisance': '#1abc9c',
    'Technologie': '#34495e'
  };
  return colors[theme] || '#3498db';
};

export default Events;