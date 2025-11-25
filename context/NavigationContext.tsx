import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationContextType {
  navigateWithAgent: (path: string) => void;
  isNavigating: boolean;
  targetPath: string | null;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const navigate = useNavigate();

  const navigateWithAgent = (path: string) => {
    if (path === window.location.hash.replace('#', '')) return;
    
    setTargetPath(path);
    setIsNavigating(true);

    // Duration of the AI Agent Animation before actual route change
    setTimeout(() => {
      navigate(path);
      // Small delay after navigation to finish animation out
      setTimeout(() => {
        setIsNavigating(false);
        setTargetPath(null);
      }, 800);
    }, 1500); 
  };

  return (
    <NavigationContext.Provider value={{ navigateWithAgent, isNavigating, targetPath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error("useNavigation must be used within NavigationProvider");
  return context;
};