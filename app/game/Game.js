import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet } from 'react-native';
import { Button, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { updateHole, updateScore } from '../actions/actionCreators';
import GameInput from './GameInput';
import Scorecard from '../scorecard';
import styles from './styles/GameStyles';


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
      <View style={styles.mainContainer}>
        <View style={{ flex: 11 }}>
          {component}
        </View>
        <Footer style={StyleSheet.flatten(styles.footer)}>
          <FooterTab>
            <Button onPress={() => this.setState({ component: 'game' })}>
              <Icon style={{ color: 'red' }} name="pencil" size={28} />
            </Button>
            <Button onPress={() => this.setState({ component: 'scorecard' })}>
              <Icon style={{ color: 'green' }} name="trophy" size={28} />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
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
