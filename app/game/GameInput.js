import * as _ from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

import ScoreGrid from './ScoreGrid';
import SwipeView from './SwipeView';
import GameHeader from './GameHeader';


const HorizontalLine = styled.View`
  border-style: solid;
  border-radius: 1;
  border-width: 1;
  border-color: #DF878B;
`;

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
        <HorizontalLine />
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
