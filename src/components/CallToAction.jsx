import React from 'react';
import './CallToAction.css';

const CallToAction = ({ onShowRegistration }) => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2>Rejoignez notre communauté dès aujourd'hui !</h2>
        <p>
          Devenez membre de notre association et profitez de tous les avantages de notre plateforme.
          Gérez vos cotisations, participez aux événements et restez connecté avec la communauté.
        </p>
        <button onClick={onShowRegistration} className="cta-button">
          Commencer maintenant
        </button>
      </div>
    </div>
  );
};

export default CallToAction;