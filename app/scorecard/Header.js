import React from 'react';

import Row from './Row';


function Header(props) {
  return (<Row
    collection={props.players}
    getContent={(player) => player.name}
    firstCellContent={'# (par)'}
  />);
}

Header.propTypes = {
  players: React.PropTypes.array.isRequired
};

export default Header;
