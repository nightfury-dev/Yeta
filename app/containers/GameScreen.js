import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

import { updateHole, updateScore } from '../actions/actionCreators';
import ScoreGrid from '../components/ScoreGrid';
import SwipeView from '../components/SwipeView';
import GameHeader from '../components/GameHeader';
import VirtualKeyboard from '../components/VirtualKeyboard';
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
      activePlayer: _.first(props.game.players)
    };

    this.setActivePlayer = this.setActivePlayer.bind(this);
    this.setNextPlayerActive = this.setNextPlayerActive.bind(this);
    this.setActivePlayer = this.setActivePlayer.bind(this);
    this.scoreIncreased = this.scoreIncreased.bind(this);
    this.scoreDecreased = this.scoreDecreased.bind(this);
    this.getScore = this.getScore.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.swipesEnabled === nextState.swipesEnabled;
  }

  setNextPlayerActive() {
    const players = this.props.game.players;
    const index = _.findIndex(
            players,
            (p) => p.id === this.state.activePlayer.id
        );
    this.setState({
      activePlayer: (index === players.length - 1) ?
                players[0] :
                players[index + 1]
    });
  }

  setPreviousPlayerActive() {
    const players = this.props.game.players;
    const index = _.findIndex(
            players,
            (p) => p.id === this.state.activePlayer.id
        );
    this.setState({
      activePlayer: (index === 0) ?
                players[players.length - 1] :
                players[index - 1]
    });
  }

  setActivePlayer(player) {
    this.setState({
      activePlayer: player
    });
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

  scoreIncreased() {
    const score = this.getScore(this.state.activePlayer);
    this.props.updateScore(this.props.game.id, score, score.score + 1);
  }

  scoreDecreased() {
    const score = this.getScore(this.state.activePlayer);
    if (score.score > 1) {
      this.props.updateScore(this.props.game.id, score, score.score - 1);
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
      <ScoreGrid
        activePlayer={this.state.activePlayer}
        activePlayerSelected={this.setActivePlayer}
        game={this.props.game}
      />
      <VirtualKeyboard
        onPreviousHole={() => { this.changeHole(currentHole - 1); }}
        onNextHole={() => { this.changeHole(currentHole + 1); }}
        onPreviousPlayer={() => { this.setPreviousPlayerActive(); }}
        onNextPlayer={() => { this.setNextPlayerActive(); }}
        onScoreIncreased={() => { this.scoreIncreased(); }}
        onScoreDecreased={() => { this.scoreDecreased(); }}
      />
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
