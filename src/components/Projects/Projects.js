// @flow
import React from 'react';
import './Projects.scss';
import contratistacr from '../../static/images/contratistacr.png';
import mamavaprimero from '../../static/images/mamavaprimero.png';

type Props = {};
type State = {};

class Projects extends React.Component<Props, State> {
  render() {
    return (
      <div className="projects flex-grid wow bounceInUp flex-grid-reverse">
        <div className="projects--grid flex-grid flex-grid-images">
          <div>
            <img src={contratistacr}/>
            <div className="projects--info">
              <p>Contratista Costa Rica</p>
              <br/>
              <p>Technologies Used</p>
              <p>Html5, Css3 and Javascript (Jquery, Angularjs), Json and Ajax. Backend: Codeigniter and MySQL.</p>
            </div>
          </div>
          <div><img src={mamavaprimero}/></div>
        </div>
        <div className="flex-grid--title">
          <h2>Projects</h2>
        </div>
      </div>
    );
  }
}

export default Projects;
