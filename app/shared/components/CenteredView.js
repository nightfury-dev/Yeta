import React from 'react';
import { View } from 'react-native';


const style = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
};

const CenteredView = (props) => (
  <View style={style}>
    {props.children}
  </View>
);

CenteredView.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ])
};

export default CenteredView;
