// SkillDetail.js
import Skills from './skills';
import React from 'react';

const SkillDetail = (props) => {
  // Access the skillId from route parameters
  const skillId = props.match.params.skillId;

  // Retrieve the detailed information for the selected skill based on skillId
  const skillDetail = getSkillDetailById(skillId); // Implement this function

  return (
    <div className="skill-detail">
      <h2>{skillDetail.name}</h2>
      <p>{skillDetail.description}</p>
      {/* Add more details and links as needed */}
    </div>
  );
};

export default SkillDetail;
