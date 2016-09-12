import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from './styles/PlayerListElementStyles';


function PlayerListElement(props) {
    return (<TouchableHighlight onLongPress={props.onLongPress}>
      <View style={styles.listItem}>
        <Text style={styles.baseText}>{props.player.name}</Text>
      </View>
    </TouchableHighlight>);
}

PlayerListElement.propTypes = {
    player: React.PropTypes.object.isRequired,
    onLongPress: React.PropTypes.func.isRequired
};

export default PlayerListElement;
