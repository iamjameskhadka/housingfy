import { createContext, useContext, useState } from 'react';

const SavedPropertiesContext = createContext({
  savedProperties: [],
  toggleSaveProperty: () => { },
  isPropertySaved: () => false
});

export function SavedPropertiesProvider({ children }) {
  const [savedProperties, setSavedProperties] = useState([]);

  const toggleSaveProperty = (property) => {
    setSavedProperties(prev => {
      const isSaved = prev.some(p => p.id === property.id);
      if (isSaved) {
        return prev.filter(p => p.id !== property.id);
      } else {
        return [...prev, property];
      }
    });
  };

  const isPropertySaved = (propertyId) => {
    return savedProperties.some(property => property.id === propertyId);
  };

  const value = {
    savedProperties,
    toggleSaveProperty,
    isPropertySaved
  };

  return (
    <SavedPropertiesContext.Provider value={value}>
      {children}
    </SavedPropertiesContext.Provider>
  );
}

export function useSavedProperties() {
  const context = useContext(SavedPropertiesContext);
  if (!context) {
    throw new Error('useSavedProperties must be used within a SavedPropertiesProvider');
  }
  return context;
} 