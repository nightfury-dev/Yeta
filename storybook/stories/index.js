import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import Menu from '../../app/menu';


storiesOf('Menu', module)
  .add('default menu', () => (
    <Menu />
  ));
