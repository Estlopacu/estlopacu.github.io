// @flow
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { changeMenu } from '../../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Menu.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import bars from '@fortawesome/fontawesome-free-solid/faBars';
import close from '@fortawesome/fontawesome-free-solid/faTimes';
import type { flowActions } from '../flow-typed/actions';

type Action = flowActions;

type Props = {
  dispatch: (action: Action) => void;
};

type State = {
    showMenu: boolean
};

class Menu extends React.Component<Props, State> {

  scrollToSection: (Object, string) => void;
  toogleMenu: () => void;
  menuSection: string;

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.scrollToSection = this.scrollToSection.bind(this);
    this.toogleMenu = this.toogleMenu.bind(this);
  }

  scrollToSection(e: {}, section: string) {
    const elem = document && document.getElementById(section);
    this.props.dispatch(changeMenu(section));
    if (this.isMobile()) {
      this.toogleMenu();
    }
    window.scrollTo(0, elem && elem.offsetTop - (this.isMobile() ? 50 : 100));

  }

  isMobile() {
    return window.getComputedStyle(document.getElementsByClassName("menu--mobile")[0]).getPropertyValue("display") === "block";
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
            <li><a onClick={(e) => this.scrollToSection(e, "profile")}>General Information</a></li>
            <li><a onClick={(e) => this.scrollToSection(e, "skills")}>Skills</a></li>
            <li><a onClick={(e) => this.scrollToSection(e, "experience")}>Laboral Experience</a></li>
            <li><a onClick={(e) => this.scrollToSection(e, "education")}>Education</a></li>
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
              <li><a onClick={(e) => this.scrollToSection(e, "profile")}>General Information</a></li>
              <li><a onClick={(e) => this.scrollToSection(e, "skills")}>Skills</a></li>
              <li><a onClick={(e) => this.scrollToSection(e, "experience")}>Laboral Experience</a></li>
              <li><a onClick={(e) => this.scrollToSection(e, "education")}>Education</a></li>
            </ul>
          </div>
          }
        </nav>
      </div>
    );
  }
}

Menu.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentMenu: state.global.currentMenu
  };
};

export default connect(
  mapStateToProps
)(Menu);
