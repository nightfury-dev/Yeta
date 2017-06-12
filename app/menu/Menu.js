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
        icon="play-circle"
        onPress={() => Actions.initgame()}
      />
      <MenuItem
        label="Resume game"
        name="resumeGame"
        icon="pause-circle"
        onPress={() => Actions.resumegame()}
      />
      <MenuItem
        label="Players"
        name="players"
        icon="users"
        onPress={() => Actions.players()}
      />
      <MenuItem
        label="Courses"
        name="courses"
        icon="map"
        onPress={() => Actions.courses()}
      />
    </Screen>
  );
}

export default Menu;
