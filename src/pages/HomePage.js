import React from 'react';
import Menu from '../components/Common/Menu';
import Hero from '../components/Common/Hero';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <Hero/>
      </div>
    );
  }
}

export default HomePage;
