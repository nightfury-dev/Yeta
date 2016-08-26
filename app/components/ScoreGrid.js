import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import ScoreGridElement from './ScoreGridElement';

const marginStyle = {
    marginTop: 10,
    marginBottom: 10
};

class ScoreGrid extends React.Component {
    getScore(player) {
        const scoreList = _.values(this.props.scores);
        return _.find(scoreList, (score) => {
            return score.player.id === player.id && score.hole.holenumber === this.props.hole;
        });
    }

    scoreIncreased(player) {
        const score = this.getScore(player);
        this.props.updateScore(this.props.gameId, player.id, this.props.hole, score.score + 1);
    }

    scoreDecreased(player) {
        const score = this.getScore(player);
        if (score.score > 1) {
            this.props.updateScore(this.props.gameId, player.id, this.props.hole, score.score - 1);
        }
    }

    render() {
        const scoreGridElements = _.values(this.props.players).map((p, index) => {
            const score = this.getScore(p);
            return <ScoreGridElement
                player={p}
                key={index}
                score={score.score}
                par={3}
                scoreIncreased={this.scoreIncreased.bind(this, p)}
                scoreDecreased={this.scoreDecreased.bind(this, p)}/>;
        });
        return (
            <View style={marginStyle}>
                {scoreGridElements}
            </View>
        );
    }
};

export default ScoreGrid;
