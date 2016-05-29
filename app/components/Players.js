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

    renderRow(rowData) {
        return (<Text>{rowData.name}</Text>);
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.props.players);
        return (
            <View>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderRow}
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
