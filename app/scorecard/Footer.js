import React from 'react';
import styled from 'styled-components/native';

import Row from './Row';
import { calculatePar } from '../helpers/course';
import { ColorPalette, Fonts } from '../themes';


const CellText = styled.Text`
  font-size: ${Fonts.size.small};
  color: ${ColorPalette.text};
`;

class Footer extends React.Component {
  render() {
    const coursePar = calculatePar(this.props.course);
    const getTotalScore = (score) => {
      const diff = score - coursePar;
      const diffStr = (diff > 0 ? (`+${diff}`) : diff);
      const text = `${score} (${diffStr})`;
      return <CellText numberOfLines={1}>{text}</CellText>;
    };
    const firstCell = <CellText numberOfLines={1}>{`(${coursePar})`}</CellText>;

    return (<Row
      collection={this.props.scores}
      getContent={getTotalScore}
      firstCellContent={firstCell}
    />);
  }
}

Footer.propTypes = {
  course: React.PropTypes.object.isRequired,
  scores: React.PropTypes.array.isRequired
};

export default Footer;
