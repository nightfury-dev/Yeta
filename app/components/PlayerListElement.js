import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from './styles/PlayerListElementStyles';


function PlayerListElement(props) {
  const style = props.selected ? styles.selectedListItem : styles.listItem;
  return (<TouchableHighlight
    onPress={props.onPress}
    onLongPress={props.onLongPress}
  >
    <View style={style}>
      <Text style={styles.baseText}>{props.player.name}</Text>
    </View>
  </TouchableHighlight>);
}

PlayerListElement.propTypes = {
  player: React.PropTypes.object.isRequired,
  onLongPress: React.PropTypes.func,
  onPress: React.PropTypes.func,
  selected: React.PropTypes.bool
};

export default PlayerListElement;
