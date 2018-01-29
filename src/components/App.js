import React, {PropTypes} from 'react';
import '../static/style/index.scss';
require('../static/images/favicon.ico');
import WOW from 'wowjs';
import { Provider } from 'react-redux';
import onlinecvStore from '../reducers';
import { createStore } from 'redux';

class App extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    const store = createStore(onlinecvStore);
    return (
      <div className="mainWrapper">
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
