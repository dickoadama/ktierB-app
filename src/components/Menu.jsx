import React from 'react';
import './Menu.css';

const Menu = ({ currentUser }) => {
  return (
    <nav className="main-menu slide-in-left">
      <ul>
        <li className="menu-item pulse">
          <a href="#dashboard">
            <span className="icon">🏠</span>
            <span className="text">Tableau de bord</span>
          </a>
        </li>
        
        {currentUser?.role === 'admin' ? (
          <>
            <li className="menu-item pulse">
              <a href="#admin/users">
                <span className="icon">👥</span>
                <span className="text">Utilisateurs</span>
              </a>
            </li>
            <li className="menu-item pulse">
              <a href="#admin/events">
                <span className="icon">🎉</span>
                <span className="text">Événements</span>
              </a>
            </li>
            <li className="menu-item pulse">
              <a href="#admin/contributions">
                <span className="icon">💰</span>
                <span className="text">Cotisations</span>
              </a>
            </li>
            <li className="menu-item pulse">
              <a href="#admin/reports">
                <span className="icon">📊</span>
                <span className="text">Rapports</span>
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="menu-item pulse">
              <a href="#members">
                <span className="icon">👥</span>
                <span className="text">Membres</span>
              </a>
            </li>
            <li className="menu-item pulse">
              <a href="#events">
                <span className="icon">🎉</span>
                <span className="text">Événements</span>
              </a>
            </li>
            <li className="menu-item pulse">
              <a href="#contributions">
                <span className="icon">💰</span>
                <span className="text">Cotisations</span>
              </a>
            </li>
            <li className="menu-item pulse">
              <a href="#reports">
                <span className="icon">📊</span>
                <span className="text">Rapports</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;