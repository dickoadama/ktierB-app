import React from 'react';
import './Header.css';

const Header = ({ onLogout, currentUser, onNavigate }) => {
  return (
    <header className="app-header animated-header">
      <div className="header-content">
        <h1 className="header-title bounce-in">
          Gestion d'Association
        </h1>
        <nav className="header-nav slide-in-right">
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Accueil</a></li>
            {currentUser?.role === 'admin' ? (
              <>
                <li className="dropdown">
                  <a href="#admin/users">Utilisateurs</a>
                  <ul className="dropdown-menu">
                    <li><a href="#admin/users/list" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-users-list'); }}>Liste des membres</a></li>
                    <li><a href="#admin/users/roles" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-users-roles'); }}>Gestion des rôles</a></li>
                    <li><a href="#admin/users/status" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-users-status'); }}>Statut des membres</a></li>
                    <li><a href="#admin/users/cotisations" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-users-cotisations'); }}>Cotisations des membres</a></li>
                    <li><a href="#admin/users/add" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('add-forms'); }}>Ajouter un utilisateur</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#admin/events">Événements</a>
                  <ul className="dropdown-menu">
                    <li><a href="#admin/events/themes" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-events-themes'); }}>Thèmes d'événements</a></li>
                    <li><a href="#admin/events/create" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-events-create'); }}>Créer un événement</a></li>
                    <li><a href="#admin/events/manage" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-events-manage'); }}>Gérer les événements</a></li>
                    <li><a href="#admin/events/participants" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-events-participants'); }}>Participants</a></li>
                    <li><a href="#admin/events/add" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('add-forms'); }}>Ajouter un événement</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#admin/contributions">Cotisations</a>
                  <ul className="dropdown-menu">
                    <li><a href="#admin/contributions/details" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-contributions-details'); }}>Détails des cotisations</a></li>
                    <li><a href="#admin/contributions/history" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-contributions-history'); }}>Historique des paiements</a></li>
                    <li><a href="#admin/contributions/statistics" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-contributions-statistics'); }}>Statistiques</a></li>
                    <li><a href="#admin/contributions/reports" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-contributions-reports'); }}>Rapports financiers</a></li>
                    <li><a href="#admin/contributions/add" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('add-forms'); }}>Ajouter une cotisation</a></li>
                  </ul>
                </li>
                <li><a href="#admin/reports" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admin-reports'); }}>Rapports</a></li>
              </>
            ) : (
              <>
                <li className="dropdown">
                  <a href="#events">Événements</a>
                  <ul className="dropdown-menu">
                    <li><a href="#events/upcoming" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('events-upcoming'); }}>Événements à venir</a></li>
                    <li><a href="#events/past" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('events-past'); }}>Événements passés</a></li>
                    <li><a href="#events/themes" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('events-themes'); }}>Thèmes d'événements</a></li>
                    <li><a href="#events/participate" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('events-participate'); }}>Participer</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#members">Membres</a>
                  <ul className="dropdown-menu">
                    <li><a href="#members/profile" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('members-profile'); }}>Mon profil</a></li>
                    <li><a href="#members/membership" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('members-membership'); }}>Adhésion</a></li>
                    <li><a href="#members/affiliation" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('members-affiliation'); }}>Appartenance</a></li>
                    <li><a href="#members/details" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('members-details'); }}>Détails personnels</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#contributions">Cotisations</a>
                  <ul className="dropdown-menu">
                    <li><a href="#contributions/my-contributions" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contributions-my-contributions'); }}>Mes cotisations</a></li>
                    <li><a href="#contributions/payment-history" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contributions-payment-history'); }}>Historique des paiements</a></li>
                    <li><a href="#contributions/due-dates" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contributions-due-dates'); }}>Dates d'échéance</a></li>
                    <li><a href="#contributions/details" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contributions-details'); }}>Détails des cotisations</a></li>
                  </ul>
                </li>
                <li><a href="#reports" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('reports'); }}>Rapports</a></li>
              </>
            )}
          </ul>
        </nav>
        <div className="user-info fade-in">
          {currentUser ? (
            <div className="user-actions">
              <span>Bonjour, {currentUser.name}</span>
            </div>
          ) : (
            <div className="auth-links">
              <a href="#login" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('login'); }}>Connexion</a>
              <a href="#register" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('register'); }}>Inscription</a>
            </div>
          )}
          {currentUser && (
            <button onClick={onLogout} className="logout-icon" title="Déconnexion">
              🔒
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;