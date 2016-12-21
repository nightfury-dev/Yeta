import * as _ from 'lodash';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../themes';
import styles from './styles/GameHeaderStyles';


function GameHeader({ game }) {
  const par = _.find(
    game.course.holes,
    (h) => h.holenumber === game.currentHole
  ).par;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={styles.baseText}>
        Hole: {game.currentHole}/{game.course.holes.length}
      </Text>
      <Text style={styles.baseText}>
        Par: {par}
      </Text>
      <TouchableHighlight onPress={() => { Actions.scorecard(); }}>
        <Icon
          name="table"
          size={40}
          color={Colors.orange}
        />
      </TouchableHighlight>
    </View>
  );
}

GameHeader.propTypes = {
  game: React.PropTypes.object.isRequired
};

export default GameHeader;
