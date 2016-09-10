import React from 'react';
import { TextInput, View, ListView } from 'react-native';

import ContextMenu from './ContextMenu';
import Button from './Button';
import Confirmation from './Confirmation';
import PlayerListElement from './PlayerListElement';
import styles from '../styles/styles';


class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPlayer: '',
            showContextMenu: false,
            showDeleteConfirmation: false
        };

        this.confirmDelete = this.confirmDelete.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
        this.showModal = this.showModal.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
    }

    addPlayer() {
        this.props.addPlayer(this.state.newPlayer);
        this.setState({
            newPlayer: ''
        });
    }

    deletePlayer() {
        this.props.removePlayer(this.state.selectedPlayer.id);
        this.setState({
            showDeleteConfirmation: false,
            selectedPlayer: null
        });
    }

    confirmDelete() {
        this.setState({
            showContextMenu: false,
            showDeleteConfirmation: true
        });
    }

    showModal(player) {
        this.setState({
            showContextMenu: true,
            selectedPlayer: player
        });
    }

    renderRow(rowData) {
        return (<PlayerListElement
          player={rowData}
          onLongPress={() => this.showModal(rowData)}
        />);
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.props.players);
        const removeName = this.state.selectedPlayer ?
            this.state.selectedPlayer.name : '';
        return (<View style={styles.background}>
          <ContextMenu
            visible={this.state.showContextMenu}
            onDelete={this.confirmDelete}
            onClose={() => this.setState({ showContextMenu: false })}
          />
          <Confirmation
            onConfirm={this.deletePlayer}
            onCancel={() => this.setState({ showDeleteConfirmation: false })}
            message={`Remove player '${removeName}'?`}
            visible={this.state.showDeleteConfirmation}
          />
          <ListView dataSource={dataSource} renderRow={this.renderRow} />
          <TextInput
            style={styles.input}
            onChangeText={(newPlayer) => this.setState({ newPlayer })}
            value={this.state.newPlayer}
          />
          <Button onPress={this.addPlayer} text={'Add player'} />
        </View>);
    }
}

Players.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    addPlayer: React.PropTypes.func.isRequired,
    removePlayer: React.PropTypes.func.isRequired,
    players: React.PropTypes.array.isRequired
};

export default Players;
