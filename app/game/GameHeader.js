import * as _ from 'lodash';
import React from 'react';
import { View, Text } from 'react-native';

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
    </View>
  );
}

GameHeader.propTypes = {
  game: React.PropTypes.object.isRequired
};

export default GameHeader;
