// SkillContext.js

import React, { createContext, useContext, useState } from 'react';

const SkillContext = createContext();

export function useSkillContext() {
  return useContext(SkillContext);
}

export function SkillProvider({ children }) {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

  const handleSelectSkill = (index) => {
    setSelectedSkillIndex(index);
  };

  return (
    <SkillContext.Provider value={{ selectedSkillIndex, handleSelectSkill }}>
      {children}
    </SkillContext.Provider>
  );
}
