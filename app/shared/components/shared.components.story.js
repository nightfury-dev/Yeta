import React from 'react';
import { Text } from 'react-native';
import { action, storiesOf } from '@kadira/react-native-storybook';

import SwipableListItem from './SwipableListItem';
import VerticallyCenteredView from './VerticallyCenteredView';


storiesOf('Swipable List Item', module)
  .add('One button', () => {
    const buttons = [{
      icon: 'trash',
      onPress: action('onPress.trash')
    }];
    return (
      <VerticallyCenteredView>
        <SwipableListItem buttons={buttons} onPress={action('onPress.row')}>
          <Text>Single button</Text>
        </SwipableListItem>
      </VerticallyCenteredView>
    );
  })
  .add('Two buttons', () => {
    const buttons = [
      {
        icon: 'pencil',
        onPress: action('onPress.pencil')
      },
      {
        icon: 'trash',
        onPress: action('onPress.trash')
      }
    ];
    return (
      <VerticallyCenteredView>
        <SwipableListItem buttons={buttons} onPress={action('onPress.row')}>
          <Text>Multiple buttons</Text>
        </SwipableListItem>
      </VerticallyCenteredView>
    );
  });
