import React from 'react';
import PropTypes from 'prop-types';

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
  text: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ListRow;
