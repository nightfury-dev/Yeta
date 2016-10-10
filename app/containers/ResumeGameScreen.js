import * as _ from 'lodash';
import moment from 'moment';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import ContextMenu from '../components/ContextMenu';
import Confirmation from '../components/Confirmation';
import styles from './styles/ResumeGameScreenStyles';


class ResumeGameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContextMenu: false,
            showDeleteConfirmation: false
        };
        this.renderRow = this.renderRow.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.showModal = this.showModal.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
    }

    getGameString(game) {
        try {
            const formattedDate = moment(game.timeBegin)
                .format('DD.MM.YYYY HH:mm');
            return `${game.course.name} (${formattedDate})`;
        } catch (e) {
            return '';
        }
    }

    handleSelection(rowData) {
        const index = _.findIndex(this.props.games, (g) => g.id === rowData.id);
        const game = this.props.games[index];
        this.props.changeCurrentGame(game);
        this.props.navigator.push({ name: 'game' });
    }

    confirmDelete() {
        this.setState({
            showContextMenu: false,
            showDeleteConfirmation: true
        });
    }

    showModal(game) {
        this.setState({
            showContextMenu: true,
            selectedGame: game
        });
    }

    deleteGame() {
        this.props.removeGame(this.state.selectedGame);
        this.setState({
            showDeleteConfirmation: false,
            selectedGame: null
        });
    }

    renderRow(rowData) {
        return (<View style={styles.listItem}>
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
        const removeGameString = this.state.selectedGame ?
            this.getGameString(this.state.selectedGame) : '';
        return (<View style={styles.mainContainer}>
          <ContextMenu
            visible={this.state.showContextMenu}
            onDelete={this.confirmDelete}
            onClose={() => this.setState({ showContextMenu: false })}
          />
          <Confirmation
            onConfirm={this.deleteGame}
            onCancel={() => this.setState({ showDeleteConfirmation: false })}
            message={`Remove game '${removeGameString}'?`}
            visible={this.state.showDeleteConfirmation}
          />
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow}
          />
        </View>);
    }
}

ResumeGameScreen.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    games: React.PropTypes.array.isRequired,
    changeCurrentGame: React.PropTypes.func.isRequired,
    removeGame: React.PropTypes.func.isRequired
};

export default ResumeGameScreen;
