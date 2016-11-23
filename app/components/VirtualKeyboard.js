import React from 'react';
import { View } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../themes';
import styles from './styles/VirtualKeyboardStyles';


const createIconButton = (icon, onPress) => (
  <Button style={styles.button} onPress={onPress}>
    <Icon name={icon} color={Colors.text} size={22} />
  </Button>
);


function VirtualKeyboard(props) {
  return (<View style={styles.container}>
    <View style={styles.row}>
      {createIconButton('angle-double-left', props.onPreviousHole)}
      {createIconButton('angle-double-right', props.onNextHole)}
    </View>
    <View style={styles.row}>
      {createIconButton('angle-double-up', props.onPreviousPlayer)}
      {createIconButton('angle-double-down', props.onNextPlayer)}
    </View>
    <View style={styles.row}>
      {createIconButton('minus', props.onScoreDecreased)}
      {createIconButton('plus', props.onScoreIncreased)}
    </View>
  </View>);
}

VirtualKeyboard.propTypes = {
  keyPressed: React.PropTypes.func.isRequired,
  onPreviousHole: React.PropTypes.func.isRequired,
  onNextHole: React.PropTypes.func.isRequired,
  onPreviousPlayer: React.PropTypes.func.isRequired,
  onNextPlayer: React.PropTypes.func.isRequired,
  onScoreDecreased: React.PropTypes.func.isRequired,
  onScoreIncreased: React.PropTypes.func.isRequired,
};

export default VirtualKeyboard;
