import React from 'react';
import { View } from 'react-native';

import { Colors, Metrics } from '../../themes';

const style = {
  flex: 1,
  backgroundColor: Colors.background,
  paddingTop: Metrics.navBarHeight
}

const Screen = ({ children }) => (
  <View style={style}>
    {children}
  </View>
);

Screen.propTypes = {
  children: React.PropTypes.any.isRequired
};

export default Screen;
