import { createContext, useState } from "react";

export const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <PlanetContext.Provider value={{currentTab, setCurrentTab}}>
      {children}
    </PlanetContext.Provider>
  )
}
