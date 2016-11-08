import React from 'react';
import moment from 'moment';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from './styles/GameListElementStyles';


const formatDate = (date) => {
    try {
        return moment(date).format('DD.MM.YYYY HH:mm');
    } catch (e) {
        return '';
    }
};

const getTotalScores = (game) => {
    const scores = {};
    const coursePar = game.course.holes.reduce(
      (acc, hole) => acc + hole.par,
      0
    );
    game.scores.forEach((score) => {
        if (!scores[score.player.id]) {
            scores[score.player.id] = 0;
        }
        scores[score.player.id] += score.score;
    });

    Object.keys(scores).forEach((playerId) => {
        const score = scores[playerId] - coursePar;
        if (score > 0) {
            scores[playerId] = `+${score}`;
        } else {
            scores[playerId] = score;
        }
    });

    return scores;
};

function GameListElement(props) {
    const totalScores = getTotalScores(props.game);
    const formattedDate = formatDate(props.game.timeBegin);
    const players = props.game.players.map(
      (player) => {
          const score = totalScores[player.id];
          return <Text style={styles.nameText}>{player.name} ({score})</Text>;
      }
    );
    return (<TouchableHighlight
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <View style={styles.listItem}>
        <View>
          <Text style={styles.bigText}>{props.game.course.name}</Text>
          <Text style={styles.tinyText}>{formattedDate}</Text>
        </View>
        <View style={styles.rightOuterContainer}>
          <View style={styles.rightContainer}>
            {players}
          </View>
        </View>
      </View>
    </TouchableHighlight>);
}

GameListElement.propTypes = {
    game: React.PropTypes.object.isRequired,
    onLongPress: React.PropTypes.func,
    onPress: React.PropTypes.func
};

export default GameListElement;
