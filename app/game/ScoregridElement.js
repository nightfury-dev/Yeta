import React from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles/ScoregridElementStyles';
import NumberSwitcher from '../shared/components/NumberSwitcher';


const ScoregridElement = (props) => (
  <View style={styles.row}>
    <View style={{ flex: 1 }}>
      <Text style={styles.orderText}>
        {props.order}
      </Text>
    </View>
    <View style={{ flex: 5 }}>
      <Text style={styles.nameText}>
        {props.player.name}
      </Text>
    </View>
    <View style={{ flex: 4 }}>
      <NumberSwitcher
        number={props.score}
        onDecrease={props.onScoreDecreased}
        onIncrease={props.onScoreIncreased}
      />
    </View>
  </View>
);

ScoregridElement.propTypes = {
  player: React.PropTypes.object.isRequired,
  score: React.PropTypes.number.isRequired,
  order: React.PropTypes.number.isRequired,
  onScoreDecreased: React.PropTypes.func.isRequired,
  onScoreIncreased: React.PropTypes.func.isRequired
};

export default ScoregridElement;
