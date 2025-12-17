import React from 'react';
import './FloatingElements.css';

const FloatingElements = ({ onLogout, currentUser }) => {
  return (
    <>
      {/* Bulles flottantes */}
      <div className="floating-bubble bubble-1"></div>
      <div className="floating-bubble bubble-2"></div>
      <div className="floating-bubble bubble-3"></div>
      <div className="floating-bubble bubble-4"></div>
      
      {/* Formes géométriques flottantes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      {/* Particules flottantes */}
      <div className="floating-particle particle-1"></div>
      <div className="floating-particle particle-2"></div>
      <div className="floating-particle particle-3"></div>
      <div className="floating-particle particle-4"></div>
      <div className="floating-particle particle-5"></div>
      

    </>
  );
};

export default FloatingElements;