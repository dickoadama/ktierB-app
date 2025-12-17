import React from 'react';
import './Members.css';

const Members = ({ currentUser }) => {
  // Informations détaillées sur l'utilisateur
  const memberDetails = {
    profile: {
      name: currentUser?.name || 'Utilisateur',
      email: currentUser?.email || 'utilisateur@example.com',
      joinDate: '2025-01-15',
      memberType: 'Membre Actif',
      status: 'Actif'
    },
    affiliation: {
      groupName: 'Association des Passionnés',
      memberId: 'MEM-' + (currentUser?.id || '001'),
      role: currentUser?.role === 'admin' ? 'Administrateur' : 'Membre',
      department: 'Général',
      team: 'Communauté'
    },
    contributions: {
      currentYear: 2025,
      annualFee: 30,
      paidAmount: 30,
      remainingAmount: 0,
      lastPaymentDate: '2025-12-01',
      paymentMethod: 'Carte bancaire',
      nextDueDate: '2026-12-01'
    }
  };

  return (
    <div className="members-container">
      {/* Éléments flotnants spécifiques aux membres */}
      <div className="member-floating-element floating-icon-1">👤</div>
      <div className="member-floating-element floating-icon-2">📋</div>
      <div className="member-floating-element floating-icon-3">💳</div>
      
      <h2>Informations sur le Membre</h2>
      
      <div className="member-details-grid">
        <div className="detail-card profile-card slide-in-left">
          <h3>Profil Personnel</h3>
          <div className="detail-item">
            <span className="label">Nom:</span>
            <span className="value">{memberDetails.profile.name}</span>
          </div>
          <div className="detail-item">
            <span className="label">Email:</span>
            <span className="value">{memberDetails.profile.email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Date d'adhésion:</span>
            <span className="value">{new Date(memberDetails.profile.joinDate).toLocaleDateString('fr-FR')}</span>
          </div>
          <div className="detail-item">
            <span className="label">Type de membre:</span>
            <span className="value">{memberDetails.profile.memberType}</span>
          </div>
          <div className="detail-item">
            <span className="label">Statut:</span>
            <span className="value status-active">{memberDetails.profile.status}</span>
          </div>
        </div>
        
        <div className="detail-card affiliation-card slide-in-right">
          <h3>Appartenance</h3>
          <div className="detail-item">
            <span className="label">Groupe:</span>
            <span className="value">{memberDetails.affiliation.groupName}</span>
          </div>
          <div className="detail-item">
            <span className="label">ID Membre:</span>
            <span className="value">{memberDetails.affiliation.memberId}</span>
          </div>
          <div className="detail-item">
            <span className="label">Rôle:</span>
            <span className={`value role-${memberDetails.affiliation.role.toLowerCase()}`}>
              {memberDetails.affiliation.role}
            </span>
          </div>
          <div className="detail-item">
            <span className="label">Département:</span>
            <span className="value">{memberDetails.affiliation.department}</span>
          </div>
          <div className="detail-item">
            <span className="label">Équipe:</span>
            <span className="value">{memberDetails.affiliation.team}</span>
          </div>
        </div>
        
        <div className="detail-card contributions-card slide-in-up">
          <h3>Cotisations</h3>
          <div className="detail-item">
            <span className="label">Année en cours:</span>
            <span className="value">{memberDetails.contributions.currentYear}</span>
          </div>
          <div className="detail-item">
            <span className="label">Cotisation annuelle:</span>
            <span className="value">{memberDetails.contributions.annualFee}€</span>
          </div>
          <div className="detail-item">
            <span className="label">Montant payé:</span>
            <span className="value paid-amount">{memberDetails.contributions.paidAmount}€</span>
          </div>
          <div className="detail-item">
            <span className="label">Restant dû:</span>
            <span className={`value ${memberDetails.contributions.remainingAmount === 0 ? 'paid-amount' : 'due-amount'}`}>
              {memberDetails.contributions.remainingAmount}€
            </span>
          </div>
          <div className="detail-item">
            <span className="label">Dernier paiement:</span>
            <span className="value">{new Date(memberDetails.contributions.lastPaymentDate).toLocaleDateString('fr-FR')}</span>
          </div>
          <div className="detail-item">
            <span className="label">Méthode de paiement:</span>
            <span className="value">{memberDetails.contributions.paymentMethod}</span>
          </div>
          <div className="detail-item">
            <span className="label">Prochaine échéance:</span>
            <span className="value">{new Date(memberDetails.contributions.nextDueDate).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
      </div>
      
      <div className="payment-history">
        <h3>Historique des Paiements</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Montant</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/12/2025</td>
              <td>Cotisation annuelle 2025</td>
              <td>30€</td>
              <td><span className="status-paid">Payé</span></td>
            </tr>
            <tr>
              <td>01/12/2024</td>
              <td>Cotisation annuelle 2024</td>
              <td>25€</td>
              <td><span className="status-paid">Payé</span></td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>Cotisation annuelle 2023</td>
              <td>20€</td>
              <td><span className="status-paid">Payé</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;