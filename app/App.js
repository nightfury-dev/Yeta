import React from 'react';
import {
    Navigator,
    BackAndroid
} from 'react-native';
import { connect } from 'react-redux';

import MenuScreen from './containers/MenuScreen';
import PlayersScreen from './containers/PlayersScreen';
import CoursesScreen from './containers/CoursesScreen';
import InitGameScreen from './containers/InitGameScreen';
import ResumeGameScreen from './containers/ResumeGameScreen';
import GameScreen from './containers/GameScreen';
import AddCourseScreen from './containers/AddCourseScreen';
import ScorecardScreen from './containers/ScorecardScreen';


let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
        _navigator = navigator;
        switch (route.name) {
        case 'players':
            return (<PlayersScreen navigator={navigator} />);
        case 'courses':
            return (<CoursesScreen navigator={navigator} />);
        case 'initGame':
            return (<InitGameScreen navigator={navigator} />);
        case 'resumeGame':
            return (<ResumeGameScreen navigator={navigator} />);
        case 'game':
            return (<GameScreen navigator={navigator} />);
        case 'addCourse':
            return (<AddCourseScreen navigator={navigator} />);
        case 'scorecard':
            return (<ScorecardScreen navigator={navigator} />);
        default:
            return (<MenuScreen navigator={navigator} />);
        }
    }

    render() {
        return (<Navigator
          initialRoute={{ title: 'Menu', name: 'menu' }}
          renderScene={this.renderScene}
          style={{ paddingTop: 22 }}
        />);
    }
}

const App = connect()(Navigation);

export default App;
