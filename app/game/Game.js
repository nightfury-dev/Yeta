import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import Interactable from 'react-native-interactable';

import { updateHole, updateScore } from '../actions/actionCreators';
import GameInput from './GameInput';
import Scorecard from '../scorecard';
import Footer from './Footer';
import Screen from '../shared/components/Screen';
import HoleInfo from './HoleInfo';


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


/*
        <View style={{ flex: 11 }}>
        </View>
        <Footer
          onShowGame={() => this.setState({ component: 'game' })}
          onShowScorecard={() => this.setState({ component: 'scorecard' })}
        />
*/
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
