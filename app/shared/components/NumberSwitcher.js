import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import AnimatedText from '../../game/AnimatedText';
import { ColorPalette } from '../../themes';
import styles from './styles/NumberSwitcherStyles';


const createIconButton = (icon, onPress) => (
  <Button style={StyleSheet.flatten(styles.button)} onPress={onPress}>
    <Icon name={icon} color={ColorPalette.secondary.text} size={14} />
  </Button>
);

const NumberSwitcher = ({ onDecrease, onIncrease, number }) => (
  <View style={styles.row}>
    {createIconButton('minus', onDecrease)}
    <AnimatedText style={styles.baseText}>
      {number}
    </AnimatedText>
    {createIconButton('plus', onIncrease)}
  </View>
);

NumberSwitcher.propTypes = {
  onDecrease: React.PropTypes.func.isRequired,
  onIncrease: React.PropTypes.func.isRequired,
  number: React.PropTypes.number.isRequired
};

export default NumberSwitcher;
