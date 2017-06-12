import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/MenuItemStyles';
import { ColorPalette, Fonts } from '../themes';


const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  flex: 2;
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
    <Container>
      <Text>{props.label}</Text>
      <Icon name={props.icon} size={24} color={ColorPalette.primary.text} />
    </Container>
  </Button>);
}

MenuItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired
};

export default MenuItem;
