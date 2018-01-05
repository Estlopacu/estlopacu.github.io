import React, {PropTypes} from 'react';
import '../static/style/index.scss';
import WOW from 'wowjs';

class App extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="mainWrapper">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
