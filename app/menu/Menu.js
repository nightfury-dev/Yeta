import React from 'react';
import { Actions } from 'react-native-router-flux';

import Logo from './Logo';
import MenuItem from './MenuItem';
import Screen from '../shared/components/Screen';


function Menu() {
  return (
    <Screen>
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
    </Screen>
  );
}

export default Menu;
