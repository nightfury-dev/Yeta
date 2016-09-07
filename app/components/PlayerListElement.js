import React from 'react';
import { Text, View } from 'react-native';

import Button from './Button';
import styles from '../styles/styles';


function PlayerListElement(props) {
    return (<View style={styles.flexRow}>
      <Text style={styles.baseText}>{props.player.name}</Text>
      <Button text={'Delete'} onPress={() => props.onDelete(props.player)} />
    </View>);
}

PlayerListElement.propTypes = {
    player: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
};

export default PlayerListElement;
