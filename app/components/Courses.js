import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';



class Courses extends React.Component {
    renderRow(rowData) {
        return (<Text>{rowData.name}</Text>);
    }

    addCourse() {
        this.props.navigator.push({name: 'addCourse'});
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1.name !== r2.name || !_.isEqual(r1.holes, r2.holes)
            }
        }).cloneWithRows(this.props.courses);
        return (
            <View>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableHighlight onPress={this.addCourse.bind(this)}>
                    <Text>Add course</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default Courses;
