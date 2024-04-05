import React, { createContext, useState, useContext } from "react";

interface SlideContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const SlideContext = createContext<SlideContextType>({} as SlideContextType);

export const useSlideContext = () => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error("useSlideContext must be used within a SlideProvider");
  }
  return context;
};

export const SlideProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SlideContext.Provider value={{ toggleSidebar, isOpen }}>
      {children}
    </SlideContext.Provider>
  );
};
