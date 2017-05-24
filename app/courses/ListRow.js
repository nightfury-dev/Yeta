import React from 'react';
import { Text } from 'react-native';

import SwipableListItem from '../shared/components/SwipableListItem';
import { ApplicationStyles, Colors } from '../themes';

const rowStyle = {
  backgroundColor: Colors.background
};

const textStyle = {
  ...ApplicationStyles.baseText
}

const ListRow = (props) => {
  const buttons = [{
    icon: 'pencil',
    onPress: props.onEdit
  }];

  return (
    <SwipableListItem style={rowStyle} buttons={buttons}>
      <Text style={textStyle}>{props.text}</Text>
    </SwipableListItem>
  );
};

ListRow.propTypes = {
  text: React.PropTypes.string.isRequired,
  onEdit: React.PropTypes.func.isRequired
};

export default ListRow;
