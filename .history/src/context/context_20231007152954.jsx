// SkillContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the SkillContext
const SkillContext = createContext();

// Create a custom hook for accessing the SkillContext
export function useSkillContext() {
  return useContext(SkillContext);
}

// Create the SkillProvider component
export function SkillProvider({ children }) {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

  return (
    <SkillContext.Provider value={{ selectedSkillIndex, setSelectedSkillIndex }}>
      {children}
    </SkillContext.Provider>
  );
}