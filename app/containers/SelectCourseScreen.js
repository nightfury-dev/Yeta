import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, ListView, View } from 'react-native';
import { Button } from 'native-base';

import CourseListElement from '../components/CourseListElement';
import styles from './styles/SelectCourseScreenStyles';


class SelectCourseScreen extends React.Component {
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

  renderSeparator() {
    return (<View style={styles.listSeparator} />);
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(this.props.courses);
    return (<ScrollView>
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          style={styles.button}
          onPress={this.courseSelected}
        >
              Continue
        </Button>
      </View>
    </ScrollView>);
  }
}

SelectCourseScreen.propTypes = {
  courseSelected: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  courses: state.courses
});

export default connect(mapStateToProps)(SelectCourseScreen);
