import React from 'react';
import profile from '../../static/images/profile.jpg';
import homeImageBanner1 from '../../static/images/hero1.jpg';
import homeImageBanner2 from '../../static/images/hero2.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import facebook from '@fortawesome/fontawesome-free-brands/faFacebookSquare'

class Hero extends React.Component {
  constructor() {
    super();
    this.state = { imgBanner: 0};
  }
  componentDidMount(){
    setInterval(() => {
      let curreImg = this.state.imgBanner + 1;
      curreImg = curreImg > 1 ? 0 : curreImg;
      this.setState({imgBanner: curreImg });
    }, 5000);
  }
  render() {
    return (
      <div className="hero">
        <div className="hero-inner">
          {this.state.imgBanner === 0 && <img src={homeImageBanner1} />}
          {this.state.imgBanner === 1 && <img src={homeImageBanner2} />}
        </div>
        <div className="hero-intro">
          <img src={profile}/>
          <h2><FontAwesomeIcon icon={facebook}/>Luis Esteban López Acuña</h2>
          <h3>Web Developer</h3>
        </div>
      </div>
    );
  }
}

export default Hero;
