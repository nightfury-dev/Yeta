import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles/AddActionButtonStyles';

const AddActionButton = (props) => (
  <Fab
    active={false}
    style={StyleSheet.flatten(styles.button)}
    position="bottomRight"
    onPress={props.onPress}
  >
    <Icon name="plus" />
    <View />
  </Fab>
);

AddActionButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default AddActionButton;
