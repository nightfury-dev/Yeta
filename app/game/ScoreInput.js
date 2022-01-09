import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import BaseText from '../shared/components/BaseText';
import NumberSwitcher from '../shared/components/NumberSwitcher';
import { ColorPalette } from '../themes';


const Row = styled.View`
  flex: 10;
  flex-direction: row;
  padding-top: 10;
  padding-bottom: 10;
  border-bottom-width: 1;
  border-color: ${ColorPalette.divider};
  align-items: center;
`;

const OrderContainer = styled.View`
  flex: 1;
`;

const NameContainer = styled.View`
  flex: 5;
`;

const InputContainer = styled.View`
  flex: 4;
`;

const NameText = styled(BaseText)`
  text-align: left;
  color: ${ColorPalette.text}
`;

const OrderText = styled(NameText)`
  padding: 10;
`;

const ScoreInput = (props) => (
  <Row>
    <OrderContainer>
      <OrderText>
        {props.order}
      </OrderText>
    </OrderContainer>
    <NameContainer>
      <NameText>
        {props.player.name}
      </NameText>
    </NameContainer>
    <InputContainer>
      <NumberSwitcher
        number={props.score}
        onDecrease={props.onScoreDecreased}
        onIncrease={props.onScoreIncreased}
      />
    </InputContainer>
  </Row>
);

ScoreInput.propTypes = {
  player: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  onScoreDecreased: PropTypes.func.isRequired,
  onScoreIncreased: PropTypes.func.isRequired
};

export default ScoreInput;
