import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles/CoursesStyles';
import AddActionButton from '../shared/components/AddActionButton';
import SwipableListItem from '../shared/components/SwipableListItem';



class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData) {
    const buttons = [{
      icon: 'pencil',
      onPress: () => Actions.addcourse({ course: rowData })
    }];
    return (
      <SwipableListItem
        style={StyleSheet.flatten(styles.row)}
        buttons={buttons}
      >
        <Text style={styles.baseText}>{rowData.name}</Text>
      </SwipableListItem>
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
        <AddActionButton onPress={() => Actions.addcourse()} />
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
