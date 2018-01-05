import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Menu.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import bars from '@fortawesome/fontawesome-free-solid/faBars';
import close from '@fortawesome/fontawesome-free-solid/faTimes';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.scrollToSection = this.scrollToSection.bind(this);
    this.toogleMenu = this.toogleMenu.bind(this);
  }

  isMobile() {
    return window.getComputedStyle(document.getElementsByClassName("menu--mobile")[0]).getPropertyValue("display") === "block";
  }

  scrollToSection(element) {
    const elem = document.getElementById(element);
    if (this.isMobile()) {
      this.toogleMenu();
    }
    window.scrollTo(0, elem.offsetTop - (this.isMobile() ? 50 : 100));

  }

  toogleMenu() {
    this.setState({showMenu: !this.state.showMenu});
    // Prevent scroll
    if (this.isMobile()) {
      document.getElementsByTagName("html")[0].style.overflow = this.state.showMenu ? "scroll" : "hidden";
      document.getElementsByTagName("body")[0].style.overflow = this.state.showMenu ? "scroll" : "hidden";
    }
  }

  render() {
    return (
      <div className="menu">
        <nav className="menu--desktop">
          <ul>
            <li><a onClick={() => { this.scrollToSection("profile"); }}>General Information</a></li>
            <li><a onClick={() => { this.scrollToSection("skills"); }}>Skills</a></li>
            <li><a onClick={() => { this.scrollToSection("experience"); }}>Laboral Experience</a></li>
            <li><a onClick={() => { this.scrollToSection("education"); }}>Education</a></li>
          </ul>
        </nav>
        <nav className="menu--mobile">
          <div className="menu--mobile-inner" onClick={() => this.toogleMenu()}>
            <FontAwesomeIcon icon={bars}/>
          </div>
          {this.state.showMenu &&
          <div className="menu--mobile-show animated linear bounceInUp">
            <ul>
              <li><a onClick={() => this.toogleMenu()}><FontAwesomeIcon icon={close}/></a></li>
              <li><a onClick={() => { this.scrollToSection("profile"); }}>General Information</a></li>
              <li><a onClick={() => { this.scrollToSection("skills"); }}>Skills</a></li>
              <li><a onClick={() => { this.scrollToSection("experience"); }}>Laboral Experience</a></li>
              <li><a onClick={() => { this.scrollToSection("education"); }}>Education</a></li>
            </ul>
          </div>
          }
        </nav>
      </div>
    );
  }
}

export default HomePage;
