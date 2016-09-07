import React from 'react';
import { TextInput, View, ListView } from 'react-native';

import Button from './Button';
import PlayerListElement from './PlayerListElement';
import styles from '../styles/styles';


class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPlayer: ''
        };

        this.confirmDelete = this.confirmDelete.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer() {
        this.props.addPlayer(this.state.newPlayer);
        this.setState({
            newPlayer: ''
        });
    }

    deletePlayer(payload) {
        this.props.removePlayer(payload.player.id);
    }

    confirmDelete(player) {
        this.props.navigator.push({
            name: 'confirmation',
            message: `Do you really want to delete player '${player.name}'?`,
            onConfirm: this.deletePlayer.bind(this),
            payload: { player }
        });
    }

    renderRow(rowData) {
        return (<PlayerListElement
          player={rowData}
          onDelete={this.confirmDelete}
        />);
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.props.players);
        return (<View style={styles.background}>
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
