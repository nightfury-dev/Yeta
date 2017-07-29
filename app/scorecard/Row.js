import React from 'react';
import styled from 'styled-components/native';

import { ColorPalette } from '../themes';


const Cell = styled.View`
  flex: 1;
  align-items: center;
`;

const FirstCell = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 5;
  border-bottom-width: 1;
  border-color: ${ColorPalette.divider};
`;

const Row = ({ collection, getContent, firstCellContent }) => {
  const cells = collection.map((entry, index) => (
    <Cell key={index}>
      {getContent(entry)}
    </Cell>
  ));

  return (
    <Container>
      <FirstCell>
        {firstCellContent}
      </FirstCell>
      {cells}
    </Container>
  );
};

Row.propTypes = {
  collection: React.PropTypes.array.isRequired,
  getContent: React.PropTypes.func.isRequired,
  firstCellContent: React.PropTypes.object.isRequired
};

export default Row;
