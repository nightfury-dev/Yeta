import React from 'react';
import styled from 'styled-components/native';

import { ColorPalette, Metrics } from '../../themes';


const View = styled.View`
  flex: 1;
  background-color: ${ColorPalette.background};
  padding-top: ${Metrics.navBarHeight}
`;

/* eslint react/prefer-stateless-function: 0 */
class Screen extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View>
        {children}
      </View>
    );
  }
}

Screen.propTypes = {
  children: React.PropTypes.any.isRequired
};

export default Screen;
