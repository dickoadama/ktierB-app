import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ currentUser }) => {
  const [events, setEvents] = useState([]);
  const [contributions, setContributions] = useState([]);

  // Initialize with empty arrays
  useEffect(() => {
    setTimeout(() => {
      setEvents([]);
      setContributions([]);
    }, 500);
  }, []);

  return (
    <div className="dashboard-container fade-in-up">
      <h2>Bienvenue, {currentUser?.name}!</h2>
      
      <div className="dashboard-stats">
        <div className="stat-card bounce">
          <h3>Événements à venir</h3>
          <p className="stat-number">{events.length}</p>
        </div>
        
        <div className="stat-card bounce">
          <h3>Cotisations dues</h3>
          <p className="stat-number">
            {contributions.filter(c => c.status === 'En attente').length}
          </p>
        </div>
        
        <div className="stat-card bounce">
          <h3>Total payé</h3>
          <p className="stat-number">
            {contributions
              .filter(c => c.status === 'Payé')
              .reduce((sum, c) => sum + c.amount, 0)}€
          </p>
        </div>
      </div>
      
      <div className="dashboard-sections">
        <section className="events-section slide-in-up">
          <h3>Événements à venir</h3>
          <div className="events-list">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <h4>{event.name}</h4>
                <p className="event-date">{new Date(event.date).toLocaleDateString('fr-FR')}</p>
                <p>{event.description}</p>
                <button className="participate-btn">Participer</button>
              </div>
            ))}
          </div>
        </section>
        
        <section className="contributions-section slide-in-up">
          <h3>Vos Cotisations</h3>
          <div className="contributions-list">
            {contributions.map(contribution => (
              <div key={contribution.id} className="contribution-card">
                <div className="contribution-header">
                  <h4>Cotisation #{contribution.id}</h4>
                  <span className={`status ${contribution.status.toLowerCase()}`}>
                    {contribution.status}
                  </span>
                </div>
                <p>Montant: {contribution.amount}€</p>
                <p>Date: {new Date(contribution.date).toLocaleDateString('fr-FR')}</p>
                {contribution.status === 'En attente' && (
                  <button className="pay-btn">Payer maintenant</button>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;