import React from 'react';
import './DynamicPage.css';

const DynamicPage = ({ title, content, onBack }) => {
  return (
    <div className="dynamic-page">
      <div className="page-header">
        <h2>{title}</h2>
        <button onClick={onBack} className="back-button">
          ← Retour
        </button>
      </div>
      <div className="page-content">
        {content || (
          <div className="placeholder-content">
            <h3>Page en cours de création</h3>
            <p>Cette page est en cours de développement. Revenez bientôt !</p>
            <div className="construction-icon">🚧</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicPage;