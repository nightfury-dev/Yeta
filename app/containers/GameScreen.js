import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

import { updateHole, updateScore } from '../actions/actionCreators';
import ScoreGrid from '../components/ScoreGrid';
import SwipeView from '../components/SwipeView';
import GameHeader from '../components/GameHeader';
import styles from './styles/GameScreenStyles';


const horizontalLine = {
  borderStyle: 'solid',
  borderRadius: 1,
  borderWidth: 1,
  borderColor: '#DF878B'
};

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipesEnabled: true,
    };

    this.getScore = this.getScore.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.swipesEnabled === nextState.swipesEnabled;
  }

  getScore(player) {
    return _.find(this.props.game.scores, (score) =>
            score.player.id === player.id &&
            score.hole.holenumber === this.props.game.currentHole
        );
  }

  changeHole(newHole) {
    if (!this.state.swipesEnabled) {
      return;
    }

    const game = this.props.game;
    if (newHole > 0 && newHole <= game.course.holes.length) {
      this.props.updateHole(game.id, newHole);
    }
  }

  render() {
    const currentHole = this.props.game.currentHole;

    return (<SwipeView
      style={styles.mainContainer}
      onRightSwipe={() => { this.changeHole(currentHole + 1); }}
      onLeftSwipe={() => { this.changeHole(currentHole - 1); }}
    >
      <GameHeader game={this.props.game} />
      <View style={horizontalLine} />
      <ScoreGrid game={this.props.game} />
    </SwipeView>);
  }
}

GameScreen.propTypes = {
  game: React.PropTypes.object.isRequired,
  games: React.PropTypes.array.isRequired,
  updateHole: React.PropTypes.func.isRequired,
  currentGame: React.PropTypes.object.isRequired,
  updateScore: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  game: state.currentGame
});

const mapDispatchToProps = (dispatch) => ({
  updateHole: bindActionCreators(updateHole, dispatch),
  updateScore: bindActionCreators(updateScore, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
