import React from 'react';
import { Text, View } from 'react-native';

import NumberPicker from './NumberPicker';


class HoleGridElement extends React.Component {
  constructor(props) {
    super(props);

    this.increasePar = this.increasePar.bind(this);
    this.decreasePar = this.decreasePar.bind(this);
  }

  increasePar() {
    this.props.onParIncreased();
  }

  decreasePar() {
    if (this.props.par > 1) {
      this.props.onParDecreased();
    }
  }

  render() {
    return (<View>
      <Text>Hole #{this.props.holeNumber}</Text>
      <NumberPicker
        number={this.props.par}
        numberIncreased={this.increasePar}
        numberDecreased={this.decreasePar}
      />
    </View>);
  }
}

HoleGridElement.propTypes = {
  par: React.PropTypes.number.isRequired,
  holeNumber: React.PropTypes.number.isRequired,
  onParIncreased: React.PropTypes.func.isRequired,
  onParDecreased: React.PropTypes.func.isRequired
};

export default HoleGridElement;
