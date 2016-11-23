import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from './styles/PlayerListElementStyles';


function CourseListElement(props) {
  const style = props.selected ? styles.selectedListItem : styles.listItem;
  return (<TouchableHighlight
    onPress={props.onPress}
    onLongPress={props.onLongPress}
  >
    <View style={style}>
      <Text style={styles.baseText}>{props.course.name}</Text>
    </View>
  </TouchableHighlight>);
}

CourseListElement.propTypes = {
  course: React.PropTypes.object.isRequired,
  onLongPress: React.PropTypes.func,
  onPress: React.PropTypes.func,
  selected: React.PropTypes.bool
};

export default CourseListElement;
