// @flow
import React from 'react';
import './Me.scss';
import profile from '../../static/images/profile.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// icons
import at from '@fortawesome/fontawesome-free-solid/faAt';
import mobile from '@fortawesome/fontawesome-free-solid/faMobile';
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import github from '@fortawesome/fontawesome-free-brands/faGithub';
import facebook from '@fortawesome/fontawesome-free-brands/faFacebookSquare';

type Props = {};
type State = {};

class Me extends React.Component<Props, State> {
  render() {
    return (
        <div className="me flex-grid" id="profile">
          <div>
            <div className="me--profile">
              <img src={profile}/>
              <h2>Luis Esteban López Acuña<br/>Web Developer</h2>
            </div>
            <div>
              <ul>
                <li><FontAwesomeIcon icon={mobile}/><h2>+(506)8873-9456</h2></li>
                <li><FontAwesomeIcon icon={at}/><h2>estlopacu@gmail.com</h2></li>
              </ul>
              <ul>
                <li><a href="https://github.com/Estlopacu"><FontAwesomeIcon icon={github}/></a></li>
                <li><a href="https://www.linkedin.com/in/estlopacu/"><FontAwesomeIcon icon={linkedin}/></a></li>
                <li><a href="https://www.facebook.com/estlopacu"><FontAwesomeIcon icon={facebook}/></a></li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Me;
