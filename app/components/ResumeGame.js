import * as _ from 'lodash';
import moment from 'moment';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Button from './Button';
import styles from '../styles/styles';

const style = {
    flex: 7,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
};


class ResumeGame extends React.Component {
    handleSelection(rowData) {
        const index = _.findIndex(this.props.games, (g) => g.id === rowData.id);
        const game = this.props.games[index];
        this.props.navigator.push({
            name: 'game',
            game
        });
    }

    getGameString(game) {
        const formattedDate = moment(game).format('DD.MM.YYYY HH:mm');
        return game.course.name + ' (' + formattedDate + ')';
    }

    confirmDelete(game) {
        this.props.navigator.push({
            name: 'confirmation',
            message: 'Do you really want to delete game ' + this.getGameString(game) + '?',
            onConfirm: this.props.removeGame.bind(this, game),
            payload: { game }
        });
    }

    renderRow(rowData) {
        return (
            <View style={style}>
                <TouchableHighlight onPress={this.handleSelection.bind(this, rowData)}>
                    <Text style={styles.listItem}>
                        {this.getGameString(rowData)}
                    </Text>
                </TouchableHighlight>
                <Button
                    onPress={this.confirmDelete.bind(this, rowData)}
                    text={'Delete'}/>
            </View>
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
