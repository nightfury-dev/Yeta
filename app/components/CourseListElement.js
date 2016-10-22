import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from './styles/PlayerListElementStyles';


function CourseListElement(props) {
    return (<TouchableHighlight onLongPress={props.onLongPress}>
      <View style={styles.listItem}>
        <Text style={styles.baseText}>{props.course.name}</Text>
      </View>
    </TouchableHighlight>);
}

CourseListElement.propTypes = {
    course: React.PropTypes.object.isRequired,
    onLongPress: React.PropTypes.func.isRequired
};

export default CourseListElement;
