import React from 'react';
import { View } from 'react-native';
import { Button } from 'native-base';

import styles from './styles/VirtualKeyboardStyles';

const createButton = (text, onPress) => (
  <Button style={styles.button} onPress={onPress}>
    {text}
  </Button>
);

function VirtualKeyboard(props) {
    return (<View style={styles.container}>
      <View style={styles.row}>
        {createButton('Prev. hole', props.onPreviousHole)}
        {createButton('Next hole', props.onNextHole)}
      </View>
      <View style={styles.row}>
        {createButton('-', props.onScoreDecreased)}
        {createButton('Prev. plr.', props.onPreviousPlayer)}
        {createButton('Next plr.', props.onNextPlayer)}
        {createButton('+', props.onScoreIncreased)}
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
