import React from 'react';

import ScoreGrid from './ScoreGrid';
import SwipeView from './SwipeView';


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
        style={{ flex: 1, marginTop: 45 }}
        onRightSwipe={nextHole}
        onLeftSwipe={previousHole}
      >
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
