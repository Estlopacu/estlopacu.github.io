import React from 'react';
import './Menu.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className="menu">
        <nav>
          <ul>
            <li><a href="#">General Information</a></li>
            <li><a href="#">Studies</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Laboral Experience</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HomePage;
