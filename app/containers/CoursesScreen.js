import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  ListView
} from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

import CourseListElement from '../components/CourseListElement';
import styles from './styles/CoursesScreenStyles';


class CoursesScreen extends React.Component {
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
    return (<CourseListElement
      course={rowData}
      onLongPress={() => this.onLongPress(rowData)}
    />);
  }

  renderSeparator() {
    return (<View style={styles.listSeparator} />);
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) =>
                r1.name !== r2.name || !_.isEqual(r1.holes, r2.holes)
    }).cloneWithRows(this.props.courses);
    return (<View style={styles.mainContainer}>
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
      <Button
        style={[styles.button, styles.centeredItem]}
        onPress={this.addCourse}
      >
            Add course
      </Button>
    </View>);
  }
}

CoursesScreen.propTypes = {
  courses: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  courses: state.courses
});

export default connect(mapStateToProps)(CoursesScreen);
