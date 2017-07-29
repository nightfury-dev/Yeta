import './ReactotronConfig';

/* eslint import/imports-first: 0 */
import React from 'react';
import { connect, Provider } from 'react-redux';

import Navigation from './navigation';
import createStore from './redux';
import StartupActions from './redux/StartupRedux';

const store = createStore();

class RootComponent extends React.Component {
  componentWillMount() {
    this.props.startup();
  }

  render() {
    return <Navigation />;
  }
}

RootComponent.propTypes = {
  startup: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
});

const ConnectedRootComponent = connect(null, mapDispatchToProps)(RootComponent);


const App = () => (
  <Provider store={store}>
    <ConnectedRootComponent />
  </Provider>
);

export default App;
