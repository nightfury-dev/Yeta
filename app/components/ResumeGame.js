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
import ContextMenu from './ContextMenu';
import styles from '../styles/styles';


class ResumeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContextMenu: false
        };
        this.renderRow = this.renderRow.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.showModal = this.showModal.bind(this);
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

    confirmDelete() {
        const game = this.state.selectedGame;
        const gameString = this.getGameString(game);
        this.setState({ showContextMenu: false });
        this.props.navigator.push({
            name: 'confirmation',
            message: `Do you really want to delete game '${gameString}'?`,
            onConfirm: this.props.removeGame.bind(this, game),
            payload: { game }
        });
    }

    showModal(game) {
        this.setState({
            showContextMenu: true,
            selectedGame: game
        });
    }

    renderRow(rowData) {
        return (<View style={styles.listItem}>
          <ContextMenu
            visible={this.state.showContextMenu}
            onDelete={this.confirmDelete}
            onClose={() => this.setState({ showContextMenu: false })}
          />
          <TouchableHighlight
            onPress={() => this.handleSelection(rowData)}
            onLongPress={() => this.showModal(rowData)}
          >
            <Text style={styles.baseText}>
              {this.getGameString(rowData)}
            </Text>
          </TouchableHighlight>
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
