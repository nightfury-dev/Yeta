import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import SelectPlayers from './SelectPlayers';
import SelectCourse from './SelectCourse';
import Screen from '../shared/components/Screen';
import GamesActions from '../redux/GamesRedux';


class InitGame extends React.Component {
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
        component = (<SelectPlayers
          playersSelected={this.playersSelected}
        />);
        break;
      case 'selectCourse':
        component = (<SelectCourse
          courseSelected={this.courseSelected}
        />);
        break;
      default:
        throw new Error(`Invalid state '${this.state.currentState}'`);
    }
    return (
      <Screen>
        {component}
      </Screen>
    );
  }
}

InitGame.propTypes = {
  createGame: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createGame: (courseId, playerIds) =>
    dispatch(GamesActions.addGame(courseId, playerIds))
});

export default connect(null, mapDispatchToProps)(InitGame);
