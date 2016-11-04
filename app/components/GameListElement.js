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

function GameListElement(props) {
    const formattedDate = formatDate(props.game.timeBegin);
    return (<TouchableHighlight
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <View style={styles.listItem}>
        <Text style={styles.baseText}>{props.game.course.name}</Text>
        <Text style={styles.tinyText}>{formattedDate}</Text>
      </View>
    </TouchableHighlight>);
}

GameListElement.propTypes = {
    game: React.PropTypes.object.isRequired,
    onLongPress: React.PropTypes.func,
    onPress: React.PropTypes.func
};

export default GameListElement;
