import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Présidente d\'association',
      content: 'Cette application a complètement transformé la façon dont nous gérons notre association. Tout est désormais centralisé et facile d\'accès.',
      avatar: 'MD'
    },
    {
      name: 'Thomas Moreau',
      role: 'Trésorier',
      content: 'La gestion des cotisations n\'a jamais été aussi simple. Le suivi des paiements est clair et efficace.',
      avatar: 'TM'
    },
    {
      name: 'Sophie Laurent',
      role: 'Membre actif',
      content: 'En tant que membre, j\'apprécie la transparence et la facilité avec laquelle je peux participer aux événements.',
      avatar: 'SL'
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>Témoignages</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card slide-in-up">
            <div className="testimonial-avatar">
              {testimonial.avatar}
            </div>
            <div className="testimonial-content">
              <p>"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;