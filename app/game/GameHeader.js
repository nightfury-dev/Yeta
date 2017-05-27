import * as _ from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

import BaseText from '../shared/components/BaseText';


const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const GameHeader = ({ game }) => {
  const par = _.find(
    game.course.holes,
    (h) => h.holenumber === game.currentHole
  ).par;
  return (
    <Container>
      <BaseText>
        Hole: {game.currentHole}/{game.course.holes.length}
      </BaseText>
      <BaseText>
        Par: {par}
      </BaseText>
    </Container>
  );
}

GameHeader.propTypes = {
  game: React.PropTypes.object.isRequired
};

export default GameHeader;
