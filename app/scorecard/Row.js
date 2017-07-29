import React from 'react';
import styled from 'styled-components/native';

import { ColorPalette, Fonts } from '../themes';


const Cell = styled.View`
  flex: 1;
  align-items: center;
`;

const FirstCell = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const CellText = styled.Text`
  font-size: ${Fonts.size.small};
  color: ${ColorPalette.text};
`;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 5;
  border-bottom-width: 1;
  border-color: ${ColorPalette.divider};
`;

const Row = (props) => {
  const cells = props.collection.map((entry, index) => {
    const content = props.getContent(entry);
    return (
      <Cell key={index}>
        <CellText numberOfLines={1}>{content}</CellText>
      </Cell>
    );
  });

  return (
    <Container>
      <FirstCell>
        <CellText numberOfLines={1}>{props.firstCellContent}</CellText>
      </FirstCell>
      {cells}
    </Container>
  );
};

Row.propTypes = {
  collection: React.PropTypes.array.isRequired,
  getContent: React.PropTypes.func.isRequired,
  firstCellContent: React.PropTypes.string.isRequired
};

export default Row;
