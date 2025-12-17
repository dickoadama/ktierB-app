import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ currentUser, onLogout }) => {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [contributions, setContributions] = useState([]);

  // Initialize with empty arrays
  useEffect(() => {
    setTimeout(() => {
      setUsers([]);
      setEvents([]);
      setContributions([]);
    }, 500);
  }, []);

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, active: !user.active } : user
    ));
  };

  const promoteToAdmin = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: 'admin' } : user
    ));
  };

  const demoteFromAdmin = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: 'member' } : user
    ));
  };

  return (
    <div className="admin-dashboard-container fade-in-up">
      <div className="admin-header">
        <h2>Panneau d'Administration</h2>
        <div className="admin-info">
          <span>Administrateur: {currentUser?.name}</span>
          <button onClick={onLogout} className="logout-btn">Déconnexion</button>
        </div>
      </div>
      
      <div className="admin-stats">
        <div className="stat-card bounce">
          <h3>Membres Actifs</h3>
          <p className="stat-number">{users.filter(u => u.active).length}</p>
        </div>
        
        <div className="stat-card bounce">
          <h3>Événements</h3>
          <p className="stat-number">{events.length}</p>
        </div>
        
        <div className="stat-card bounce">
          <h3>Revenus</h3>
          <p className="stat-number">
            {contributions
              .filter(c => c.status === 'Payé')
              .reduce((sum, c) => sum + c.amount, 0)}€
          </p>
        </div>
      </div>
      
      <div className="admin-sections">
        <section className="users-management slide-in-up">
          <h3>Gestion des Utilisateurs</h3>
          <div className="users-list">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Rôle</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className={user.active ? '' : 'inactive'}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`role-badge ${user.role}`}>
                        {user.role === 'admin' ? 'Administrateur' : 'Membre'}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${user.active ? 'active' : 'inactive'}`}>
                        {user.active ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td>
                      {user.id !== currentUser.id && (
                        <>
                          <button 
                            onClick={() => toggleUserStatus(user.id)}
                            className="action-btn toggle-btn"
                          >
                            {user.active ? 'Désactiver' : 'Activer'}
                          </button>
                          
                          {user.role === 'member' ? (
                            <button 
                              onClick={() => promoteToAdmin(user.id)}
                              className="action-btn promote-btn"
                            >
                              Promouvoir
                            </button>
                          ) : user.id !== currentUser.id && (
                            <button 
                              onClick={() => demoteFromAdmin(user.id)}
                              className="action-btn demote-btn"
                            >
                              Rétrograder
                            </button>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="events-management slide-in-up">
          <h3>Gestion des Événements</h3>
          <div className="events-list">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <h4>{event.name}</h4>
                <p className="event-date">{new Date(event.date).toLocaleDateString('fr-FR')}</p>
                <p>{event.description}</p>
                <div className="event-actions">
                  <button className="action-btn edit-btn">Modifier</button>
                  <button className="action-btn delete-btn">Supprimer</button>
                </div>
              </div>
            ))}
            
            <div className="add-event">
              <button className="action-btn add-btn">Ajouter un événement</button>
            </div>
          </div>
        </section>
        
        <section className="contributions-management slide-in-up">
          <h3>Gestion des Cotisations</h3>
          <div className="contributions-list">
            <table className="contributions-table">
              <thead>
                <tr>
                  <th>Membre</th>
                  <th>Événement</th>
                  <th>Montant</th>
                  <th>Date</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contributions.map(contribution => (
                  <tr key={contribution.id}>
                    <td>{contribution.userName}</td>
                    <td>{contribution.eventName}</td>
                    <td>{contribution.amount}€</td>
                    <td>{new Date(contribution.date).toLocaleDateString('fr-FR')}</td>
                    <td>
                      <span className={`status-badge ${contribution.status.toLowerCase()}`}>
                        {contribution.status}
                      </span>
                    </td>
                    <td>
                      {contribution.status === 'En attente' && (
                        <button className="action-btn pay-btn">Valider le paiement</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;