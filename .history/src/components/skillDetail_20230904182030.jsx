// SkillDetail.js
import Skills from './skills';
import React from 'react';
import { skills } from './skillDesc';

const SkillDetail = (props) => {
  // Access the skillId from route parameters
  

  return (
    <div className="skill-detail">
      <h2>{skillDetail.name}</h2>
      <p>{skillDetail.description}</p>
      {/* Add more details and links as needed */}
    </div>
  );
};

export default SkillDetail;
