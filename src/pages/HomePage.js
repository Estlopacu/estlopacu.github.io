import React from 'react';
import Menu from '../components/Common/Menu';
import Me from '../components/Me/Me';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Common/Footer';

class HomePage extends React.Component {
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

export default HomePage;
