import React from 'react';
import moment from 'moment';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from './styles/GameListElementStyles';


function getGameString(game) {
    try {
        const formattedDate = moment(game.timeBegin)
            .format('DD.MM.YYYY HH:mm');
        return `${game.course.name} (${formattedDate})`;
    } catch (e) {
        return '';
    }
}

function GameListElement(props) {
    const gameString = getGameString(props.game);
    return (<TouchableHighlight
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <View style={styles.listItem}>
        <Text style={styles.baseText}>{gameString}</Text>
      </View>
    </TouchableHighlight>);
}

GameListElement.propTypes = {
    game: React.PropTypes.object.isRequired,
    onLongPress: React.PropTypes.func,
    onPress: React.PropTypes.func
};

export default GameListElement;
