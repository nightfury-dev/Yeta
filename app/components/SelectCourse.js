import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/styles';


class SelectCourse extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSelection(course) {
        this.setState({
            selectedCourse: course
        });
    }

    courseSelected() {
        if (this.state.selectedCourse) {
            this.props.courseSelected(this.state.selectedCourse);
        }
    }

    getSelectedCourse() {
        if (this.state && this.state.selectedCourse) {
            return this.state.selectedCourse;
        }
        return null;
    }

    renderRow(rowData) {
        const selectedCourse = this.getSelectedCourse();
        const text = (selectedCourse &&
            selectedCourse.name === rowData.name ? '* ' : '') + rowData.name;

        return (
            <TouchableHighlight onPress={this.handleSelection.bind(this, rowData)}>
                <Text style={styles.listItem}>{text}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.props.courses);
        return (
            <View style={styles.background}>
              <ListView
                  dataSource={dataSource}
                  renderRow={this.renderRow.bind(this)}
              />
              <TouchableHighlight style={styles.menuItem}
                    onPress={this.courseSelected.bind(this)}>
                  <Text style={styles.menuItemText}>Continue</Text>
              </TouchableHighlight>
            </View>
        );
    }
};

export default SelectCourse;
