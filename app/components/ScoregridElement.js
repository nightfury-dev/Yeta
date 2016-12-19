import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../themes/Colors';
import styles from './styles/ScoregridElementStyles';
import AnimatedText from './AnimatedText';


const createIconButton = (icon, onPress) => (
  <Button style={styles.button} onPress={onPress}>
    <Icon name={icon} color={Colors.text} size={14} />
  </Button>
);

const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);

function ScoregridElement(props) {
  return (
    <View style={styles.row}>
      <Text style={styles.orderText}>{props.order}</Text>
      <View style={styles.nameStyle}>
        <Text style={baseText}>
          {props.player.name}
        </Text>
      </View>
      {createIconButton('minus', () => { props.onScoreDecreased(); })}
      <AnimatedText style={styles.baseText}>{props.score}</AnimatedText>
      {createIconButton('plus', () => { props.onScoreIncreased(); })}
    </View>
  );
}

ScoregridElement.propTypes = {
  player: React.PropTypes.object.isRequired,
  score: React.PropTypes.number.isRequired,
  order: React.PropTypes.number.isRequired,
  onScoreDecreased: React.PropTypes.func.isRequired,
  onScoreIncreased: React.PropTypes.func.isRequired
};

export default ScoregridElement;
