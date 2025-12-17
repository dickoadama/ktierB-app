import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '👥',
      title: 'Gestion des Membres',
      description: 'Suivez facilement tous les membres de votre association avec leurs informations détaillées.'
    },
    {
      icon: '🎉',
      title: 'Événements',
      description: 'Organisez et gérez tous vos événements associatifs en un seul endroit.'
    },
    {
      icon: '💰',
      title: 'Cotisations',
      description: 'Gérez les cotisations et paiements de manière transparente et organisée.'
    },
    {
      icon: '📊',
      title: 'Rapports',
      description: 'Obtenez des rapports détaillés sur l\'activité de votre association.'
    },
    {
      icon: '🔒',
      title: 'Sécurité',
      description: 'Protégez les données de vos membres avec notre système de sécurité avancé.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Accédez à votre application depuis n\'importe quel appareil, ordinateur ou mobile.'
    }
  ];

  return (
    <div className="features-container">
      <h2>Fonctionnalités de notre plateforme</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card bounce-in">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;