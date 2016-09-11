import React from 'react';
import { View, ListView } from 'react-native';
import { Button, InputGroup, Input } from 'native-base';

import ContextMenu from '../components/ContextMenu';
import Confirmation from '../components/Confirmation';
import PlayerListElement from '../components/PlayerListElement';
import styles from '../styles/styles';


class PlayersScreen extends React.Component {
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
          <InputGroup borderType="rounded">
            <Input
              placeholder="Player name"
              style={styles.input}
              onChangeText={(newPlayer) => this.setState({ newPlayer })}
              value={this.state.newPlayer}
            />
          </InputGroup>
          <Button
            style={styles.centeredItem}
            onPress={this.addPlayer}
          >
            Add player
          </Button>
        </View>);
    }
}

PlayersScreen.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    addPlayer: React.PropTypes.func.isRequired,
    removePlayer: React.PropTypes.func.isRequired,
    players: React.PropTypes.array.isRequired
};

export default PlayersScreen;
