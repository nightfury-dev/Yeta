import React from 'react';

import ScorecardEntry from './ScorecardEntry';


function Header(props) {
  return (<ScorecardEntry
    collection={props.players}
    getContent={(player) => player.name}
    firstCellContent={'# (par)'}
  />);
}

Header.propTypes = {
  players: React.PropTypes.array.isRequired
};

export default Header;
