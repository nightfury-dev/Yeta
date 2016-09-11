import React from 'react';
import { View } from 'react-native';

import ScoreGrid from '../components/ScoreGrid';
import SwipeView from '../components/SwipeView';
import GameHeader from '../components/GameHeader';
import styles from '../styles/styles';


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
        this.stateChanged = this.stateChanged.bind(this);
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

    stateChanged(state) {
        if (this.state.swipesEnabled && state === 'edit') {
            this.setState({ swipesEnabled: false });
        } else if (!this.state.swipesEnabled && state === 'view') {
            this.setState({ swipesEnabled: true });
        }
    }

    render() {
        const game = this.props.game;
        const course = game.course;
        const players = game.players;

        return (<SwipeView
          style={styles.background}
          onRightSwipe={this.nextHole}
          onLeftSwipe={this.previousHole}
        >
          <GameHeader {...this.props} />
          <View style={horizontalLine} />
          <ScoreGrid
            {...this.props}
            gameId={game.id}
            course={course}
            players={players}
            scores={game.scores}
            hole={game.currentHole}
            stateChanged={this.stateChanged}
          />
        </SwipeView>);
    }
}

GameScreen.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    game: React.PropTypes.object.isRequired,
    games: React.PropTypes.array.isRequired,
    courses: React.PropTypes.array.isRequired,
    updateHole: React.PropTypes.func.isRequired,
};

export default GameScreen;
