import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDashboard'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Events from './components/Events'
import Members from './components/Members'
import Contributions from './components/Contributions'
import Reports from './components/Reports'
import FloatingElements from './components/FloatingElements'
import DynamicPage from './components/DynamicPage'
import AddForms from './components/AddForms'
import useNavigation from './hooks/useNavigation'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [events, setEvents] = useState([])
  const [contributions, setContributions] = useState([])
  const { currentPage, navigateTo, getCurrentPageComponent } = useNavigation()

  const handleLogin = (userData) => {
    setIsLoggedIn(true)
    setCurrentUser(userData)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  const handleShowRegistration = () => {
    setShowRegistration(true)
  }

  const handleRegistrationComplete = (userData) => {
    setShowRegistration(false)
    setIsLoggedIn(true)
    setCurrentUser(userData)
  }

  const handleNavigation = (pageId) => {
    // Pour les pages existantes, on utilise la navigation normale
    if (['home', 'login', 'register'].includes(pageId)) {
      return;
    }
    
    // Pour les autres pages, on navigue vers une page dynamique
    navigateTo(pageId);
  };

  const handleBack = () => {
    navigateTo('home');
  };

  const handleAddUser = (userData) => {
    setUsers(prev => [...prev, userData]);
    console.log('Nouvel utilisateur ajouté:', userData);
  };

  const handleAddEvent = (eventData) => {
    setEvents(prev => [...prev, eventData]);
    console.log('Nouvel événement ajouté:', eventData);
  };

  const handleAddContribution = (contributionData) => {
    setContributions(prev => [...prev, contributionData]);
    console.log('Nouvelle cotisation ajoutée:', contributionData);
  };

  return (
    <div className="App">
      <FloatingElements onLogout={handleLogout} currentUser={currentUser} />
      <Header onLogout={handleLogout} currentUser={currentUser} onNavigate={handleNavigation} />
      
      <div className="main-container">
        {!isLoggedIn && !showRegistration && currentPage === 'home' && (
          <>
            <div className="welcome-section">
              <h2>Bienvenue dans l'Application de Gestion d'Association</h2>
              <p>Connectez-vous pour accéder à votre espace personnel ou inscrivez-vous pour devenir membre.</p>
              <div className="auth-buttons">
                <button onClick={handleShowRegistration} className="primary-btn">S'inscrire</button>
              </div>
            </div>
            <Login onLogin={handleLogin} onShowRegistration={handleShowRegistration} />
            <Features />
            <Testimonials />
            <CallToAction onShowRegistration={handleShowRegistration} />
          </>
        )}
        
        {showRegistration && (
          <Registration onRegistrationComplete={handleRegistrationComplete} onCancel={() => setShowRegistration(false)} />
        )}
        
        {isLoggedIn && currentUser?.role === 'admin' && currentPage === 'home' && (
          <AdminDashboard currentUser={currentUser} onLogout={handleLogout} />
        )}
        
        {isLoggedIn && currentUser?.role !== 'admin' && currentPage === 'home' && (
          <Dashboard currentUser={currentUser} />
        )}
        
        {currentPage !== 'home' && currentPage === 'add-forms' ? (
          <AddForms 
            onAddUser={handleAddUser}
            onAddEvent={handleAddEvent}
            onAddContribution={handleAddContribution}
            onBack={handleBack}
          />
        ) : (
          <DynamicPage 
            title={`Page ${currentPage}`} 
            onBack={handleBack} 
          />
        )}
      </div>
    </div>
  )
}

export default App