import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';
import styles from './styles/MenuScreenStyles';


function MenuScreen() {
  return (<View style={styles.mainContainer}>
    <Logo />
    <MenuItem
      label="Game"
      name="initGame"
      onPress={() => Actions.initgame()}
    />
    <MenuItem
      label="Resume game"
      name="resumeGame"
      onPress={() => Actions.resumegame()}
    />
    <MenuItem
      label="Players"
      name="players"
      onPress={() => Actions.players()}
    />
    <MenuItem
      label="Courses"
      name="courses"
      onPress={() => Actions.courses()}
    />
  </View>);
}

export default MenuScreen;
