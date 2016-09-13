import * as _ from 'lodash';
import React from 'react';
import { ScrollView, View } from 'react-native';

import ScoregridElement from './ScoregridElement';
import VirtualKeyboard from './VirtualKeyboard';
import styles from './styles/ScoreGridStyles';


const marginStyle = {
    marginTop: 10,
    flex: 1
};

class ScoreGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showKeyboard: false };

        this.keyPressed = this.keyPressed.bind(this);
        this.setActivePlayer = this.setActivePlayer.bind(this);
        this.setNextPlayerActive = this.setNextPlayerActive.bind(this);
    }

    getScore(player) {
        const scoreList = _.values(this.props.scores);
        return _.find(scoreList, (score) =>
            score.player.id === player.id &&
            score.hole.holenumber === this.props.hole
        );
    }

    setNextPlayerActive() {
        const players = _.values(this.props.players);
        if (!this.state.activePlayer) {
            this.setState({ activePlayer: _.first(players) });
        } else {
            const index = _.findIndex(
                players,
                (p) => p.id === this.state.activePlayer.id
            );
            this.setState({
                activePlayer: (index === players.length - 1) ?
                    players[0] :
                    players[index + 1]
            });
        }
    }

    setActivePlayer(player) {
        if (this.state.activePlayer &&
            this.state.activePlayer.id === player.id) {
            this.setState({
                showKeyboard: false,
                activePlayer: null
            });
        } else {
            this.setState({
                showKeyboard: this.state.showKeyboard || true,
                activePlayer: player
            });
        }
    }

    scoreIncreased(player) {
        const score = this.getScore(player);
        this.props.updateScore(
            this.props.gameId, player.id, this.props.hole, score.score + 1
        );
    }

    scoreDecreased(player) {
        const score = this.getScore(player);
        if (score.score > 1) {
            this.props.updateScore(
                this.props.gameId, player.id, this.props.hole, score.score - 1
            );
        }
    }

    keyPressed(value) {
        if (value === 'next') {
            this.setNextPlayerActive();
        } else if (value === '+') {
            this.scoreIncreased(this.state.activePlayer);
        } else if (value === '-') {
            this.scoreDecreased(this.state.activePlayer);
        } else {
            this.props.updateScore(
                this.props.gameId,
                this.state.activePlayer.id,
                this.props.hole,
                value
            );
            this.setNextPlayerActive();
        }
    }

    render() {
        const virtualKeyboard = this.state.showKeyboard ? (<View
          style={styles.keyboardContainer}
        >
          <VirtualKeyboard keyPressed={this.keyPressed} />
        </View>) :
        null;
        const scoreGridElements = _.values(this.props.players).map(
            (p, index) => {
                const score = this.getScore(p);
                const highlighted = this.state.activePlayer &&
                    p.id === this.state.activePlayer.id;
                return (<ScoregridElement
                  {...this.props}
                  onPress={() => this.setActivePlayer(p)}
                  highlighted={highlighted}
                  hole={this.props.hole}
                  player={p}
                  key={index}
                  score={score.score}
                  par={3}
                />);
            }
        );
        return (<View style={marginStyle}>
          <ScrollView>
            {scoreGridElements}
          </ScrollView>
          {virtualKeyboard}
        </View>);
    }
}

ScoreGrid.propTypes = {
    scores: React.PropTypes.object.isRequired,
    players: React.PropTypes.object.isRequired,
    hole: React.PropTypes.number.isRequired,
    updateScore: React.PropTypes.func.isRequired,
    gameId: React.PropTypes.number.isRequired
};

export default ScoreGrid;
