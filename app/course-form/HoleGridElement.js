import React from 'react';
import PropTypes from 'prop-types';

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
  par: PropTypes.number.isRequired,
  holeNumber: PropTypes.number.isRequired,
  onParIncreased: PropTypes.func.isRequired,
  onParDecreased: PropTypes.func.isRequired
};

export default HoleGridElement;
