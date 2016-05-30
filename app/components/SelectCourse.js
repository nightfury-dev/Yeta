import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';


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

    renderRow(rowData) {
        return (
            <TouchableHighlight onPress={this.handleSelection.bind(this, rowData)}>
                <Text>{rowData.name}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.props.courses);
        return (
            <View>
              <ListView
                  dataSource={dataSource}
                  renderRow={this.renderRow.bind(this)}
              />
              <TouchableHighlight onPress={this.courseSelected.bind(this)}>
                  <Text>Continue</Text>
              </TouchableHighlight>
            </View>
        );
    }
};

export default SelectCourse;
