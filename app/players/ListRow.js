import React from 'react';

import BaseText from '../shared/components/BaseText';
import SwipableListItem from '../shared/components/SwipableListItem';
import { ColorPalette } from '../themes';

const rowStyle = {
  backgroundColor: ColorPalette.background
};

const ListRow = (props) => {
  const buttons = [{
    icon: 'trash',
    onPress: props.onDelete
  }];

  return (
    <SwipableListItem style={rowStyle} buttons={buttons}>
      <BaseText>{props.text}</BaseText>
    </SwipableListItem>
  );
};

ListRow.propTypes = {
  text: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default ListRow;
