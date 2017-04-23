import React from 'react';
import { View } from 'react-native';


const VerticallyCenteredView = (props) => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    {props.children}
  </View>
);

VerticallyCenteredView.propTypes = {
  children: React.PropTypes.any
};

export default VerticallyCenteredView;
