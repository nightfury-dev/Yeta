import './ReactotronConfig';

/* eslint import/imports-first: 0 */
import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import Menu from './menu';
import Players from './players';
import Courses from './courses';
import InitGame from './create-game';
import ResumeGame from './resume-game';
import Game from './game';
import AddCourse from './course-form';
import Scorecard from './scorecard';
import createStore from './redux';
import StartupActions from './redux/StartupRedux';

const store = createStore();

const Navigation = () => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'menu'} component={Menu} initial />
      <Scene key={'players'} component={Players} />
      <Scene key={'initgame'} component={InitGame} />
      <Scene key={'resumegame'} component={ResumeGame} />
      <Scene key={'game'} component={Game} />
      <Scene key={'courses'} component={Courses} />
      <Scene key={'addcourse'} component={AddCourse} />
      <Scene key={'scorecard'} component={Scorecard} />
    </Scene>
  </Router>
);

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
