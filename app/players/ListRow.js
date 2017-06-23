import React from 'react';

import BaseText from '../shared/components/BaseText';
import SwipableListItem from '../shared/components/SwipableListItem';
import { ColorPalette } from '../themes';

const rowStyle = {
  backgroundColor: ColorPalette.background
};

const ListRow = ({ text, onDelete, onEdit }) => {
  const buttons = [
    {
      icon: 'pencil',
      onPress: onEdit
    },
    {
      icon: 'trash',
      onPress: onDelete
    }
  ];

  return (
    <SwipableListItem style={rowStyle} buttons={buttons}>
      <BaseText>{text}</BaseText>
    </SwipableListItem>
  );
};

ListRow.propTypes = {
  text: React.PropTypes.string.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default ListRow;
