import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

import { updateHole } from '../actions/actionCreators';
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
        this.state = { swipesEnabled: true };

        this.nextHole = this.nextHole.bind(this);
        this.previousHole = this.previousHole.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.swipesEnabled === nextState.swipesEnabled;
    }

    nextHole() {
        this.changeHole(this.props.game.currentHole + 1);
    }

    previousHole() {
        this.changeHole(this.props.game.currentHole - 1);
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
        return (<SwipeView
          style={styles.mainContainer}
          onRightSwipe={this.nextHole}
          onLeftSwipe={this.previousHole}
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
    currentGame: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    game: state.currentGame
});

const mapDispatchToProps = (dispatch) => ({
    updateHole: bindActionCreators(updateHole, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
