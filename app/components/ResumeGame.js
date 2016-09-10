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
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }
    getGameString(game) {
        const formattedDate = moment(game.timeBegin).format('DD.MM.YYYY HH:mm');
        return `${game.course.name} (${formattedDate})`;
    }

    handleSelection(rowData) {
        const index = _.findIndex(this.props.games, (g) => g.id === rowData.id);
        const game = this.props.games[index];
        this.props.navigator.push({
            name: 'game',
            game
        });
    }

    confirmDelete(game) {
        const gameString = this.getGameString(game);
        this.props.navigator.push({
            name: 'confirmation',
            message: `Do you really want to delete game '${gameString}'?`,
            onConfirm: this.props.removeGame.bind(this, game),
            payload: { game }
        });
    }

    renderRow(rowData) {
        return (<View style={styles.listItem}>
          <TouchableHighlight onPress={() => this.handleSelection(rowData)}>
            <Text style={styles.baseText}>
              {this.getGameString(rowData)}
            </Text>
          </TouchableHighlight>
          <Button
            onPress={() => this.confirmDelete(rowData)}
            text={'Delete'}
          />
        </View>);
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(this.props.games);
        return (<View style={styles.background}>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow}
          />
        </View>);
    }
}

ResumeGame.propTypes = {
    navigator: React.PropTypes.func.isRequired,
    games: React.PropTypes.array.isRequired,
    removeGame: React.PropTypes.func.isRequired
};

export default ResumeGame;
