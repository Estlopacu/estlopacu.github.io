import React, {PropTypes} from 'react';
import '../static/style/index.scss';

class App extends React.Component {
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
