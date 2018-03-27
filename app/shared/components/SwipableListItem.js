import React from 'react';
import { ListItem } from 'native-base';
import PropTypes from 'prop-types';

/* eslint import/no-named-as-default: 0, import/no-named-as-default-member: 0 */
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';

import CenteredView from './CenteredView';

const CenteredIcon = ({ icon }) => (
  <CenteredView>
    <Icon name={icon} size={28} style={{ color: 'red' }} />
  </CenteredView>
);

CenteredIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

const SwipableListItem = ({ children, buttons, onPress, style }) => {
  const iconButtons = buttons.map(btn => ({
    text: '',
    component: <CenteredIcon icon={btn.icon} />,
    backgroundColor: 'white',
    onPress: btn.onPress
  }));
  return (
    <Swipeout style={{ ...style }} right={iconButtons}>
      <ListItem onPress={onPress}>
        {children}
      </ListItem>
    </Swipeout>
  );
};

SwipableListItem.propTypes = {
  children: PropTypes.any.isRequired,
  buttons: PropTypes.array.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.any
};

export default SwipableListItem;
