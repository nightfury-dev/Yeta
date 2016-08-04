import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import PlayerListElement from './PlayerListElement';


class Players extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newPlayer: ''
        };
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
            message: 'Do you really want to delete player ' + player.name + '?',
            onConfirm: this.deletePlayer.bind(this),
            payload: { player }
        });
    }

    renderRow(rowData) {
        return <PlayerListElement
            player={rowData}
            onDelete={this.confirmDelete.bind(this)} />;
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.props.players);
        return (
            <View>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
                <TextInput
                    onChangeText={(newPlayer) => this.setState({newPlayer})}
                    value={this.state.newPlayer} />
                <TouchableHighlight onPress={this.addPlayer.bind(this)}>
                    <Text>Add player</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default Players;
