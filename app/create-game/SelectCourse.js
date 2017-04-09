import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, ListView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import CourseListElement from '../shared/components/CourseListElement';
import styles from './styles/SelectCourseStyles';


class SelectCourse extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.courseSelected = this.courseSelected.bind(this);
  }

  getSelectedCourse() {
    if (this.state && this.state.selectedCourse) {
      return this.state.selectedCourse;
    }
    return null;
  }

  courseSelected() {
    if (this.state.selectedCourse) {
      this.props.courseSelected(this.state.selectedCourse);
    }
  }

  handleSelection(course) {
    this.setState({
      selectedCourse: course
    });
  }

  renderRow(rowData) {
    const selected = this.state && this.state.selectedCourse &&
            this.state.selectedCourse.id === rowData.id;
    return (<CourseListElement
      course={rowData}
      selected={selected}
      onPress={() => this.handleSelection(rowData)}
    />);
  }

  renderSeparator(sectionID, rowID) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.listSeparator}
      />
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(this.props.courses);
    const isCourseSelected = this.state && this.state.courseSelected !== null;
    return (
      <ScrollView>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            disabled={!isCourseSelected}
            style={StyleSheet.flatten(styles.button)}
            onPress={this.courseSelected}
          >
            <Text style={styles.baseText}>Continue</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

SelectCourse.propTypes = {
  courseSelected: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  courses: state.courses
});

export default connect(mapStateToProps)(SelectCourse);
