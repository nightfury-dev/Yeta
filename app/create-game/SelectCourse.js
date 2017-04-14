import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, ListView, View, Text, StyleSheet } from 'react-native';
import { Button, ListItem, Radio, Right } from 'native-base';

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
    return (
      <ListItem onPress={() => this.handleSelection(rowData)}>
        <Text style={styles.baseText}>{rowData.name}</Text>
        <Right>
          <Radio selected={selected} />
        </Right>
      </ListItem>
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(this.props.courses);
    const isCourseSelected = this.state && this.state.courseSelected !== null;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow}
            enableEmptySections
          />
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            disabled={!isCourseSelected}
            style={StyleSheet.flatten(styles.button)}
            onPress={this.courseSelected}
          >
            <Text style={styles.baseText}>Continue</Text>
          </Button>
        </View>
      </View>
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
