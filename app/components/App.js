import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Menu from './Menu';
import Players from './Players';
import Courses from './Courses';

import React from 'react';
import {
  Navigator,
  BackAndroid
} from 'react-native';


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

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});


class Navigation extends React.Component {
    renderScene(route, navigator) {
        _navigator = navigator;
        switch (route.name) {
            case 'players':
                return (<Players {...this.props} navigator={navigator} />);
            case 'courses':
                return (<Courses {...this.props} navigator={navigator} />);
            default:
                return (<Menu {...this.props} navigator={navigator} />);
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    title: 'Menu',
                    name: 'menu'
                }}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default App;
