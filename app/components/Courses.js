import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Button from './Button';
import styles from '../styles/styles';


class Courses extends React.Component {
    renderRow(rowData) {
        return (<Text style={styles.baseText}>{rowData.name}</Text>);
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
            <View style={styles.background}>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderRow}
                />
                <Button
                    onPress={this.addCourse.bind(this)}
                    text={'Add course'} />
            </View>
        );
    }
};

export default Courses;
