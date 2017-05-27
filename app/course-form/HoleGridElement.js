import React from 'react';

import Row from './Row';
import TextWrapper from './TextWrapper';
import ButtonsWrapper from './ButtonsWrapper';
import RowText from './RowText';
import NumberSwitcher from '../shared/components/NumberSwitcher';


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
      <Row>
        <TextWrapper>
          <RowText>#{this.props.holeNumber}</RowText>
        </TextWrapper>
        <ButtonsWrapper>
          <NumberSwitcher
            number={this.props.par}
            onDecrease={this.decreasePar}
            onIncrease={this.props.onParIncreased}
          />
        </ButtonsWrapper>
      </Row>
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
