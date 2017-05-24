import * as _ from 'lodash';
import React from 'react';
import { View } from 'react-native';

import ScoreGrid from './ScoreGrid';
import SwipeView from './SwipeView';
import GameHeader from './GameHeader';


const horizontalLine = {
  borderStyle: 'solid',
  borderRadius: 1,
  borderWidth: 1,
  borderColor: '#DF878B'
};

class GameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipesEnabled: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.swipesEnabled === nextState.swipesEnabled;
  }

  render() {
    const { nextHole, previousHole, game } = this.props;
    return (
      <SwipeView
        style={{ flex: 1 }}
        onRightSwipe={nextHole}
        onLeftSwipe={previousHole}
      >
        <GameHeader game={game} />
        <View style={horizontalLine} />
        <ScoreGrid game={game} />
      </SwipeView>
    );
  }
}

GameInput.propTypes = {
  game: React.PropTypes.object.isRequired,
  nextHole: React.PropTypes.func.isRequired,
  previousHole: React.PropTypes.func.isRequired
};

export default GameInput;