import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import GameInput from './GameInput';
import Scorecard from '../scorecard';
import Footer from './Footer';
import Screen from '../shared/components/Screen';
import HoleInfo from './HoleInfo';
import GamesActions from '../redux/GamesRedux';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'game'
    };
    this.changeHole = this.changeHole.bind(this);
  }

  changeHole(newHole) {
    const game = this.props.game;
    if (newHole > 0 && newHole <= game.course.holes.length) {
      this.props.updateHole(game.id, newHole);
    }
  }

  render() {
    if (this.props.creating) {
      // TODO: show a loader
      return null;
    }

    const currentHole = this.props.game.currentHole;
    const component = this.state.component === 'game'
      ? (<GameInput
        game={this.props.game}
        nextHole={() => this.changeHole(currentHole + 1)}
        previousHole={() => this.changeHole(currentHole - 1)}
      />)
      : <Scorecard />;
    return (
      <Screen>
        {this.state.component === 'game' && <HoleInfo />}
        <View style={{ flex: 11 }}>
          {component}
        </View>
        <Footer
          onShowGame={() => this.setState({ component: 'game' })}
          onShowScorecard={() => this.setState({ component: 'scorecard' })}
        />
      </Screen>
    );
  }
}

Game.propTypes = {
  game: React.PropTypes.object,
  updateHole: React.PropTypes.func.isRequired,
  creating: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  game: state.games.current,
  creating: state.games.creating
});

const mapDispatchToProps = (dispatch) => ({
  updateHole: (gameId, newHole) =>
    dispatch(GamesActions.updateHole(gameId, newHole))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
