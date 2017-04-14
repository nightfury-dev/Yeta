import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ListItem } from 'native-base';

import styles from './styles/CoursesStyles';
import AddActionButton from '../shared/components/AddActionButton';


class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.addCourse = this.addCourse.bind(this);
  }

  onLongPress(course) {
    Actions.addcourse({ course });
  }

  addCourse() {
    Actions.addcourse();
  }

  renderRow(rowData) {
    return (
      <ListItem onLongPress={() => this.onLongPress(rowData)}>
        <Text style={styles.baseText}>{rowData.name}</Text>
      </ListItem>
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) =>
                r1.name !== r2.name || !_.isEqual(r1.holes, r2.holes)
    }).cloneWithRows(this.props.courses);
    return (
      <View style={styles.mainContainer}>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
        <AddActionButton onPress={this.addCourse} />
      </View>
    );
  }
}

Courses.propTypes = {
  courses: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  courses: state.courses
});

export default connect(mapStateToProps)(Courses);
