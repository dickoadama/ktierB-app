import React, { useState } from 'react';
import './Contributions.css';

const Contributions = ({ currentUser }) => {
  const [contributions] = useState([
    { 
      id: 1, 
      eventId: 1, 
      eventName: 'Assemblée Générale', 
      amount: 25, 
      status: 'Payé', 
      date: '2025-12-01',
      dueDate: '2025-12-01',
      paymentMethod: 'Carte bancaire'
    },
    { 
      id: 2, 
      eventId: 2, 
      eventName: 'Repas de Noël', 
      amount: 30, 
      status: 'En attente', 
      date: '2025-12-10',
      dueDate: '2025-12-20',
      paymentMethod: 'En espèces'
    },
    { 
      id: 3, 
      eventId: 3, 
      eventName: 'Tournoi Sportif', 
      amount: 15, 
      status: 'Payé', 
      date: '2025-12-05',
      dueDate: '2025-12-05',
      paymentMethod: 'Virement'
    }
  ]);

  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedContribution, setSelectedContribution] = useState(null);

  const handlePayContribution = (contribution) => {
    setSelectedContribution(contribution);
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulation du paiement
    alert(`Paiement de ${selectedContribution.amount}€ effectué avec succès!`);
    setShowPaymentForm(false);
    setSelectedContribution(null);
  };

  const totalPaid = contributions
    .filter(c => c.status === 'Payé')
    .reduce((sum, c) => sum + c.amount, 0);

  const totalDue = contributions
    .filter(c => c.status === 'En attente')
    .reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="contributions-container">
      {/* Éléments flotnants spécifiques aux cotisations */}
      <div className="contribution-floating-element floating-icon-1">💰</div>
      <div className="contribution-floating-element floating-icon-2">📊</div>
      <div className="contribution-floating-element floating-icon-3">📈</div>
      
      <h2>Détails des Cotisations</h2>
      
      <div className="contributions-summary">
        <div className="summary-card total-paid">
          <h3>Total Payé</h3>
          <p className="amount">{totalPaid}€</p>
        </div>
        
        <div className="summary-card total-due">
          <h3>Total Dû</h3>
          <p className="amount">{totalDue}€</p>
        </div>
        
        <div className="summary-card balance">
          <h3>Solde</h3>
          <p className="amount">{totalPaid - totalDue}€</p>
        </div>
      </div>
      
      <div className="contributions-list">
        <h3>Liste des Cotisations</h3>
        <table className="contributions-table">
          <thead>
            <tr>
              <th>Événement</th>
              <th>Date d'échéance</th>
              <th>Montant</th>
              <th>Méthode</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map(contribution => (
              <tr key={contribution.id} className={`status-${contribution.status.toLowerCase()}`}>
                <td>{contribution.eventName}</td>
                <td>{new Date(contribution.dueDate).toLocaleDateString('fr-FR')}</td>
                <td>{contribution.amount}€</td>
                <td>{contribution.paymentMethod}</td>
                <td>
                  <span className={`status-badge ${contribution.status.toLowerCase()}`}>
                    {contribution.status}
                  </span>
                </td>
                <td>
                  {contribution.status === 'En attente' && (
                    <button 
                      className="pay-btn"
                      onClick={() => handlePayContribution(contribution)}
                    >
                      Payer
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {showPaymentForm && selectedContribution && (
        <div className="payment-modal">
          <div className="payment-form slide-in-up">
            <h3>Paiement de la cotisation</h3>
            <p>Événement: {selectedContribution.eventName}</p>
            <p>Montant à payer: {selectedContribution.amount}€</p>
            
            <form onSubmit={handlePaymentSubmit}>
              <div className="form-group">
                <label htmlFor="paymentMethod">Méthode de paiement:</label>
                <select id="paymentMethod" name="paymentMethod" required>
                  <option value="">Sélectionnez une méthode</option>
                  <option value="card">Carte bancaire</option>
                  <option value="transfer">Virement bancaire</option>
                  <option value="cash">Espèces</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Numéro de carte (pour simulation):</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  name="cardNumber" 
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Date d'expiration:</label>
                  <input 
                    type="text" 
                    id="expiryDate" 
                    name="expiryDate" 
                    placeholder="MM/AA"
                    maxLength="5"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cvv">CVV:</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    name="cvv" 
                    placeholder="123"
                    maxLength="3"
                  />
                </div>
              </div>
              
              <div className="form-buttons">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowPaymentForm(false)}
                >
                  Annuler
                </button>
                <button type="submit" className="submit-btn">Payer maintenant</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contributions;