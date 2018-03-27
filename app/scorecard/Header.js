import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Row from './Row';
import { ColorPalette, Fonts } from '../themes';


const CellText = styled.Text`
  font-size: ${Fonts.size.small};
  color: ${ColorPalette.text};
`;

const Header = ({ players }) => (
  <Row
    collection={players}
    getContent={(player) =>
      <CellText numberOfLines={1}>{player.name}</CellText>
    }
    firstCellContent={<CellText numberOfLines={1}>{'# (par)'}</CellText>}
  />
);

Header.propTypes = {
  players: PropTypes.array.isRequired
};

export default Header;
