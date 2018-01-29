// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../components/Common/Menu';
import Me from '../components/Me/Me';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Common/Footer';

type Props = {
  currentMenu: string
};

type State = {};

class HomePage extends React.Component<Props, State> {
  render() {
    return (
      <div className="wow fadeIn">
        <Menu/>
        <Me/>
        <Skills/>
        <Experience/>
        <Education/>
        <Footer/>
      </div>
    );
  }
}

HomePage.propTypes = {
  currentMenu: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentMenu: state.global.currentMenu
  };
};

export default connect(
  mapStateToProps
)(HomePage);
