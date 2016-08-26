import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/styles';


class ResumeGame extends React.Component {
    handleSelection(rowData) {
        const index = _.findIndex(this.props.games, (g) => g.id === rowData.id);
        const game = this.props.games[index];
        this.props.navigator.push({
            name: 'game',
            game
        });
    }

    renderRow(rowData) {
        return (
            <TouchableHighlight onPress={this.handleSelection.bind(this, rowData)}>
                <Text style={styles.listItem}>
                    {rowData.course.name} ({rowData.timeBegin.toString()})
                </Text>
            </TouchableHighlight>
        );
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(this.props.games);
        return (
            <View style={styles.background}>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
};

export default ResumeGame;
