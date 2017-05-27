import React from 'react';
import styled from 'styled-components/native';

import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import BaseText from '../shared/components/BaseText';


const Row = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.View`
  flex: 2;
`;

const NumberPicker = (props) => {
  const additionalText = props.additionalText ? props.additionalText : '';
  return (
    <Row>
      <MinusButton onPress={() => props.numberDecreased()} />
      <TextContainer>
        <BaseText>
          {additionalText} {props.number}
        </BaseText>
      </TextContainer>
      <PlusButton onPress={() => props.numberIncreased()} />
    </Row>
  );
}

NumberPicker.propTypes = {
  additionalText: React.PropTypes.string,
  numberIncreased: React.PropTypes.func.isRequired,
  numberDecreased: React.PropTypes.func.isRequired,
  number: React.PropTypes.number.isRequired
};

export default NumberPicker;
