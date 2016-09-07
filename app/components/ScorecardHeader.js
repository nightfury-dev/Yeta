import React from 'react';

import ScorecardEntry from './ScorecardEntry';


function ScorecardHeader(props) {
    return (<ScorecardEntry
      collection={props.players}
      getContent={(player) => player.name}
      firstCellContent={'# (par)'}
    />);
}

ScorecardHeader.propTypes = {
    players: React.PropTypes.array.isRequired
};

export default ScorecardHeader;
