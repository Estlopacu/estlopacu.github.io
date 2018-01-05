import React from 'react';

const SkillBar = props => {
  let barStyle = {
    width: props.skill.percent
  };

  return (
    <div>
      {props.skill.type}
      <div className="skills--progressContainer">
        <span className="wow animated linear slideInLeft" style={barStyle}>{props.skill.percent}</span>
      </div>
    </div>
  );
};

export default SkillBar;
