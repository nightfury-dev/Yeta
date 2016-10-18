import * as _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import { createGame } from '../actions/actionCreators';
import SelectPlayersScreen from './SelectPlayersScreen';
import SelectCourseScreen from './SelectCourseScreen';
import styles from './styles/InitGameScreenStyles';


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
            _.values(selectedCourse.holes).map((hole) => hole.par)
        );

        // :D sorry, it's midnight
        setTimeout(() => {
            Actions.game({ type: ActionConst.REPLACE });
        }, 1000);
    }

    render() {
        let component;
        switch (this.state.currentState) {
        case 'selectPlayers':
            component = (<SelectPlayersScreen
              playersSelected={this.playersSelected}
            />);
            break;
        case 'selectCourse':
            component = (<SelectCourseScreen
              courseSelected={this.courseSelected}
            />);
            break;
        default:
            throw new Error(`Invalid state '${this.state.currentState}'`);
        }
        return (
          <View style={styles.mainContainer}>
            {component}
          </View>
        );
    }
}

InitGameScreen.propTypes = {
    createGame: React.PropTypes.func.isRequired,
    changeCurrentGame: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    createGame: bindActionCreators(createGame, dispatch)
});

export default connect(null, mapDispatchToProps)(InitGameScreen);
