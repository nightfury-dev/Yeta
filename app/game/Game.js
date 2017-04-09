import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

import { updateHole, updateScore } from '../actions/actionCreators';
import ScoreGrid from './ScoreGrid';
import SwipeView from './SwipeView';
import GameHeader from './GameHeader';
import styles from './styles/GameStyles';


const horizontalLine = {
  borderStyle: 'solid',
  borderRadius: 1,
  borderWidth: 1,
  borderColor: '#DF878B'
};

class Game extends React.Component {
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

Game.propTypes = {
  game: React.PropTypes.object.isRequired,
  updateHole: React.PropTypes.func.isRequired,
  updateScore: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  game: state.currentGame
});

const mapDispatchToProps = (dispatch) => ({
  updateHole: bindActionCreators(updateHole, dispatch),
  updateScore: bindActionCreators(updateScore, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
