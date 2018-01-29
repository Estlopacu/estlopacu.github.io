// @flow
import React from 'react';
import './Experience.scss';
import experienceList from '../../static/data/experience.json';

type Props = {};
type State = {};

class Experience extends React.Component<Props, State> {
  render() {
    return (
      <div className="experience flex-grid wow bounceInUp flex-grid-reverse" id="experience">
        <div className="flex-grid experience--grid">
            {experienceList.experience.map( (experience, index) => (
              <div key={index}>
                <h4>{experience.company}</h4>
                <h4>{experience.dates}</h4>
                <h3>{experience.position}</h3>
                <p>{experience.location}</p>
              </div>
            ))}
        </div>
        <div className="flex-grid--title">
          <h2>Laboral Experience</h2>
        </div>
      </div>
    );
  }
}

export default Experience;
