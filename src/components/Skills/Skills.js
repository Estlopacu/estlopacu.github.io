// @flow
import React from 'react';
import './Skills.scss';
import SkillBar from './SkillBar.js';
import skillsList from '../../static/data/skills.json';

type Props = {};
type State = {};

class Skills extends React.Component<Props, State> {
  render() {
    return (
      <div className="skills flex-grid wow bounceInUp" id="skills">
      <div className="flex-grid--title">
        <h2>Skills</h2>
      </div>
        <div className="flex-grid skills--grid">
          {skillsList.skills.map((skill, index) => (
            <SkillBar skill={skill} key={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
