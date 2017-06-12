import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';
import styled from 'styled-components/native';

import styles from './styles/MenuItemStyles';
import { ColorPalette, Fonts } from '../themes';


const Text = styled.Text`
  text-align: center;
  color: ${ColorPalette.primary.text};
  font-size: ${Fonts.size.normal};
  font-family: ${Fonts.defaultFontFamily};
`;

function MenuItem(props) {
  return (<Button
    block
    large
    style={StyleSheet.flatten(styles.menuItem)}
    onPress={props.onPress}
  >
    <Text>{props.label}</Text>
  </Button>);
}

MenuItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired
};

export default MenuItem;
