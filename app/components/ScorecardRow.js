import React from 'react';

import ScorecardEntry from './ScorecardEntry';


function ScorecardRow(props) {
    const firstCell = `${props.holeNumber} (${props.par})`;
    return (<ScorecardEntry
      collection={props.scores}
      getContent={(score) => score}
      firstCellContent={firstCell}
    />);
}

ScorecardRow.propTypes = {
    holeNumber: React.PropTypes.number.isRequired,
    par: React.PropTypes.number.isRequired,
    scores: React.PropTypes.array.isRequired
};

export default ScorecardRow;
