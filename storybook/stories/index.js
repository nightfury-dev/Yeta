import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import Menu from '../../app/menu';
import '../../app/shared/components/shared.components.story';

storiesOf('Menu', module)
  .add('default menu', () => (
    <Menu />
  ));
