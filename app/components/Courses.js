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

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1.name !== r2.name || !_.isEqual(r1.pars, r2.pars)
            }
        }).cloneWithRows(this.props.courses);
        return (
            <View>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
};

export default Courses;
