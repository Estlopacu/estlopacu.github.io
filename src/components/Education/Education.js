import React from 'react';
import './Education.scss';
import educationList from '../../static/data/education.json';

class Education extends React.Component {
  render() {
    return (
      <div className="education flex-grid wow bounceInUp" id="education" >
        <div className="flex-grid--title">
          <h2>Education</h2>
        </div>
        <div className="flex-grid education--grid">
            {educationList.education.map( (education, index) => (
              <div key={index}>
                <h3>{education.title}</h3>
                <h4>{education.dates}</h4>
                <h5>{education.studyCenter}</h5>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Education;
