import { useState, useCallback } from 'react';

const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [dynamicPages, setDynamicPages] = useState({});

  const navigateTo = useCallback((pageId, component = null) => {
    // Si la page n'existe pas encore et qu'un composant est fourni, on la crée
    if (component && !dynamicPages[pageId]) {
      setDynamicPages(prev => ({
        ...prev,
        [pageId]: component
      }));
    }
    
    setCurrentPage(pageId);
    
    // Scroll vers le haut de la page
    window.scrollTo(0, 0);
  }, [dynamicPages]);

  const getCurrentPageComponent = useCallback(() => {
    return dynamicPages[currentPage] || null;
  }, [currentPage, dynamicPages]);

  return {
    currentPage,
    navigateTo,
    getCurrentPageComponent,
    dynamicPages
  };
};

export default useNavigation;