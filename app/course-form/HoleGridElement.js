import React from 'react';
import { Text, View } from 'react-native';

import NumberSwitcher from '../shared/components/NumberSwitcher';
import styles from './styles/HoleGridElementStyles';


class HoleGridElement extends React.Component {
  constructor(props) {
    super(props);
    this.decreasePar = this.decreasePar.bind(this);
  }

  decreasePar() {
    if (this.props.par > 1) {
      this.props.onParDecreased();
    }
  }

  render() {
    return (
      <View style={styles.row}>
        <View style={{ flex: 3 }}>
          <Text style={styles.baseText}>#{this.props.holeNumber}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <NumberSwitcher
            number={this.props.par}
            onDecrease={this.decreasePar}
            onIncrease={this.props.onParIncreased}
          />
        </View>
      </View>
    );
  }
}

HoleGridElement.propTypes = {
  par: React.PropTypes.number.isRequired,
  holeNumber: React.PropTypes.number.isRequired,
  onParIncreased: React.PropTypes.func.isRequired,
  onParDecreased: React.PropTypes.func.isRequired
};

export default HoleGridElement;
