import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import MenuScreen from './containers/MenuScreen';
import PlayersScreen from './containers/PlayersScreen';
import CoursesScreen from './containers/CoursesScreen';
import InitGameScreen from './containers/InitGameScreen';
import ResumeGameScreen from './containers/ResumeGameScreen';
import GameScreen from './containers/GameScreen';
import AddCourseScreen from './containers/AddCourseScreen';
import ScorecardScreen from './containers/ScorecardScreen';


function Navigation() {
    return (<Router>
      <Scene key={'root'}>
        <Scene key={'menu'} component={MenuScreen} initial />
        <Scene key={'players'} component={PlayersScreen} />
        <Scene key={'initgame'} component={InitGameScreen} />
        <Scene key={'resumegame'} component={ResumeGameScreen} />
        <Scene key={'game'} component={GameScreen} />
        <Scene key={'courses'} component={CoursesScreen} />
        <Scene key={'addcourse'} component={AddCourseScreen} />
        <Scene key={'scorecard'} component={ScorecardScreen} />
      </Scene>
    </Router>);
}

const App = connect()(Navigation);

export default App;
