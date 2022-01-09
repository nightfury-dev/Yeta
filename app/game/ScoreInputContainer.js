import React from 'react';
import PropTypes from 'prop-types';

import ScoreInputCollection from './ScoreInputCollection';
import SwipeView from './SwipeView';


class ScoreInputContainer extends React.Component {
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
        <ScoreInputCollection game={game} />
      </SwipeView>
    );
  }
}

ScoreInputContainer.propTypes = {
  game: PropTypes.object.isRequired,
  nextHole: PropTypes.func.isRequired,
  previousHole: PropTypes.func.isRequired
};

export default ScoreInputContainer;
