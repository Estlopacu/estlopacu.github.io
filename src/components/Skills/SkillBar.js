// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  skill: {
    percent: number,
    type: string
  }
};

const SkillBar = (props: Props) => {
  const barStyle = {
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

SkillBar.propTypes = {
  skill: PropTypes.shape()
};

export default SkillBar;
