import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

import styles from './styles/MenuItemStyles';


function MenuItem(props) {
  return (<Button
    block
    style={styles.menuItem}
    onPress={props.onPress}
  >
    <Text style={styles.menuItemText}>{props.label}</Text>
  </Button>);
}

MenuItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired
};

export default MenuItem;
