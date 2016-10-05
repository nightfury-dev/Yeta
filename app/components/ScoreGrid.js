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
        this.getPlayingOrders = this.getPlayingOrders.bind(this);
    }

    getScore(player) {
        const scoreList = _.values(this.props.scores);
        return _.find(scoreList, (score) =>
            score.player.id === player.id &&
            score.hole.holenumber === this.props.hole
        );
    }

    getPlayingOrders() {
        const nextOrdering = (holeOrder, holeScores) => {
            const grouped = _.groupBy(holeScores, 'score');
            if (Object.keys(grouped).length === 1) {
                return holeOrder;
            }

            let currentOrder = 1;
            const order = {};

            // Loop through each distinct score group and set the correct
            // ordering. Keep the order correct among players in the same
            // score group
            _.values(grouped).forEach((group) => {
                const sortedOrdering = _.chain(group)
                    .map((s) => ({
                        playerId: s.player.id,
                        order: holeOrder[s.player.id]
                    }))
                    .sortBy('order')
                    .value();
                sortedOrdering.forEach((obj) => {
                    order[obj.playerId] = currentOrder++;
                });
            });

            return order;
        };

        // First hole order is always default
        const firstHoleScores = {};
        _.values(this.props.game.players).forEach((player, index) => {
            firstHoleScores[player.id] = index + 1;
        });

        const ordering = { 1: firstHoleScores };
        const holeCount = _.values(this.props.game.course.holes).length;
        _.range(2, holeCount).forEach((holeNumber) => {
            const previousOrdering = ordering[holeNumber - 1];
            const previousScores = _.values(this.props.game.scores).filter(
                (score) => score.hole.holenumber === (holeNumber - 1)
            );
            const next = nextOrdering(previousOrdering, previousScores);
            ordering[holeNumber] = next;
        });

        return ordering;
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

        const ordering = this.getPlayingOrders();
        const scoreGridElements = _.values(this.props.players).map(
            (p, index) => {
                const score = this.getScore(p);
                const highlighted = this.state.activePlayer &&
                    p.id === this.state.activePlayer.id;

                const order = ordering[this.props.hole][p.id];

                return (<ScoregridElement
                  {...this.props}
                  onPress={() => this.setActivePlayer(p)}
                  highlighted={highlighted}
                  hole={this.props.hole}
                  order={order}
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
    gameId: React.PropTypes.number.isRequired,
    game: React.PropTypes.object.isRequired,
};

export default ScoreGrid;
