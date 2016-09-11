import React from 'react';
import {
    Navigator,
    BackAndroid
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';
import MenuScreen from './containers/MenuScreen';
import PlayersScreen from './containers/PlayersScreen';
import CoursesScreen from './containers/CoursesScreen';
import InitGameScreen from './containers/InitGameScreen';
import ResumeGameScreen from './containers/ResumeGameScreen';
import GameScreen from './containers/GameScreen';
import AddCourseScreen from './containers/AddCourseScreen';
import ScorecardScreen from './containers/ScorecardScreen';


function mapStateToProps(state) {
    return {
        players: state.players,
        courses: state.courses,
        games: state.games
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

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
            return (<PlayersScreen {...this.props} navigator={navigator} />);
        case 'courses':
            return (<CoursesScreen {...this.props} navigator={navigator} />);
        case 'initGame':
            return (<InitGameScreen {...this.props} navigator={navigator} />);
        case 'resumeGame':
            return (<ResumeGameScreen {...this.props} navigator={navigator} />);
        case 'game':
            return (<GameScreen
              {...this.props}
              game={route.game}
              navigator={navigator}
            />);
        case 'addCourse':
            return (<AddCourseScreen {...this.props} navigator={navigator} />);
        case 'scorecard':
            return (
              <ScorecardScreen
                {...this.props}
                game={route.game}
                navigator={navigator}
              />);
        default:
            return (<MenuScreen {...this.props} navigator={navigator} />);
        }
    }

    render() {
        return (<Navigator
          initialRoute={{ title: 'Menu', name: 'menu' }}
          renderScene={this.renderScene}
          style={{ paddingTop: 20 }}
        />);
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default App;
