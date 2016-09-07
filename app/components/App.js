import React from 'react';
import {
    Navigator,
    BackAndroid
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import Menu from './Menu';
import Players from './Players';
import Courses from './Courses';
import InitGame from './InitGame';
import ResumeGame from './ResumeGame';
import Game from './Game';
import AddCourse from './AddCourse';
import Scorecard from './Scorecard';
import Confirmation from './Confirmation';


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
            return (<Players {...this.props} navigator={navigator} />);
        case 'courses':
            return (<Courses {...this.props} navigator={navigator} />);
        case 'initGame':
            return (<InitGame {...this.props} navigator={navigator} />);
        case 'resumeGame':
            return (<ResumeGame {...this.props} navigator={navigator} />);
        case 'game':
            return (<Game
              {...this.props}
              game={route.game}
              navigator={navigator}
            />);
        case 'addCourse':
            return (<AddCourse {...this.props} navigator={navigator} />);
        case 'scorecard':
            return (
              <Scorecard
                {...this.props}
                game={route.game}
                navigator={navigator}
              />);
        case 'confirmation':
            return (<Confirmation
              {...this.props}
              message={route.message}
              onConfirm={route.onConfirm}
              payload={route.payload}
              navigator={navigator}
            />);
        default:
            return (<Menu {...this.props} navigator={navigator} />);
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
