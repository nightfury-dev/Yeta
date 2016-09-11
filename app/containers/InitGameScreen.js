import * as _ from 'lodash';
import React from 'react';
import { View } from 'react-native';

import SelectPlayersScreen from './SelectPlayersScreen';
import SelectCourseScreen from './SelectCourseScreen';
import styles from '../styles/styles';


class InitGameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'selectPlayers'
        };

        this.playersSelected = this.playersSelected.bind(this);
        this.courseSelected = this.courseSelected.bind(this);
    }

    playersSelected(selectedPlayers) {
        this.setState({
            selectedPlayers,
            currentState: 'selectCourse'
        });
    }

    courseSelected(selectedCourse) {
        this.props.createGame(
            selectedCourse.id,
            _.values(this.state.selectedPlayers).map((player) => player.id),
            _.values(selectedCourse.holes).map((hole) => hole.par),
            (game) => {
                this.props.navigator.replace({ name: 'game', game });
            }
        );
    }

    render() {
        let component;
        switch (this.state.currentState) {
        case 'selectPlayers':
            component = (<SelectPlayersScreen
              {...this.props}
              playersSelected={this.playersSelected}
            />);
            break;
        case 'selectCourse':
            component = (<SelectCourseScreen
              {...this.props}
              courseSelected={this.courseSelected}
            />);
            break;
        default:
            throw new Error(`Invalid state '${this.state.currentState}'`);
        }
        return (
          <View style={styles.background}>
            {component}
          </View>
        );
    }
}

InitGameScreen.propTypes = {
    navigator: React.PropTypes.func.isRequired,
    createGame: React.PropTypes.func.isRequired
};

export default InitGameScreen;
