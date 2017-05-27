import React from 'react';

import BaseText from '../shared/components/BaseText';
import SwipableListItem from '../shared/components/SwipableListItem';
import { Colors } from '../themes';

const rowStyle = {
  backgroundColor: Colors.background
};

const ListRow = ({ text, onEdit }) => {
  const buttons = [{
    icon: 'pencil',
    onPress: onEdit
  }];

  return (
    <SwipableListItem style={rowStyle} buttons={buttons}>
      <BaseText>{text}</BaseText>
    </SwipableListItem>
  );
};

ListRow.propTypes = {
  text: React.PropTypes.string.isRequired,
  onEdit: React.PropTypes.func.isRequired
};

export default ListRow;
