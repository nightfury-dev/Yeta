import * as _ from 'lodash';
import React from 'react';

import ScorecardEntry from './ScorecardEntry';
import { calculatePar } from '../helpers/course';


class ScorecardFooter extends React.Component {
  render() {
    const coursePar = calculatePar(this.props.course);
    const getTotalScore = (score) => {
      const diff = score - coursePar;
      const diffStr = (diff > 0 ? (`+${diff}`) : diff);
      return `${score} (${diffStr})`;
    };
    return (<ScorecardEntry
      collection={this.props.scores}
      getContent={getTotalScore}
      firstCellContent={`(${coursePar})`}
    />);
  }
}

ScorecardFooter.propTypes = {
  course: React.PropTypes.object.isRequired,
  scores: React.PropTypes.array.isRequired
};

export default ScorecardFooter;
