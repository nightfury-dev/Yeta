import React from 'react';
import styled from 'styled-components/native';

import Row from './Row';
import { ColorPalette, Fonts } from '../themes';


const CellText = styled.Text`
  font-size: ${Fonts.size.small};
  color: ${ColorPalette.text};
`;

function Header(props) {
  const firstCell = <CellText numberOfLines={1}>{'# (par)'}</CellText>;
  return (<Row
    collection={props.players}
    getContent={(player) =>
      <CellText numberOfLines={1}>{player.name}</CellText>
    }
    firstCellContent={firstCell}
  />);
}

Header.propTypes = {
  players: React.PropTypes.array.isRequired
};

export default Header;
