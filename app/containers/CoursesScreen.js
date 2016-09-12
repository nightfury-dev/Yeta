import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';
import { Button } from 'native-base';

import styles from './styles/CoursesScreenStyles';


class CoursesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.addCourse = this.addCourse.bind(this);
    }

    addCourse() {
        this.props.navigator.push({ name: 'addCourse' });
    }

    renderRow(rowData) {
        return <Text style={styles.baseText}>{rowData.name}</Text>;
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
          />
          <Button
            style={styles.centeredItem}
            onPress={this.addCourse}
          >
            Add course
          </Button>
        </View>);
    }
}

CoursesScreen.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    courses: React.PropTypes.array.isRequired
};


export default CoursesScreen;
