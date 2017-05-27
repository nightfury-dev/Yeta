import React from 'react';
import styled from 'styled-components/native';

import { Colors, Metrics } from '../../themes';


const View = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  padding-top: ${Metrics.navBarHeight}
`;

const Screen = ({ children }) => (
  <View>
    {children}
  </View>
);

Screen.propTypes = {
  children: React.PropTypes.any.isRequired
};

export default Screen;
