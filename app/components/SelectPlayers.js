import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';


class SelectPlayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.players.map((p) => {
                return _.extend({selected: false}, p);
            })
        };
    }

    playersSelected() {
        const selectedPlayers = this.state.players.filter((p) => p.selected);
        this.props.playersSelected(selectedPlayers)
    }

    handleSelection(player) {
        const i = _.findIndex(this.state.players, (p) => p.id === player.id);
        const players = [
            ...this.state.players.slice(0, i),
            {...player, selected: !player.selected},
            ...this.state.players.slice(i + 1)
        ];
        this.setState({players});
    }

    renderRow(rowData) {
        return (
            <TouchableHighlight onPress={this.handleSelection.bind(this, rowData)}>
                <Text>{rowData.name}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.state.players);

        return (
            <View>
              <ListView
                  dataSource={dataSource}
                  renderRow={this.renderRow.bind(this)}
              />
              <TouchableHighlight onPress={this.playersSelected.bind(this)}>
                  <Text>Continue</Text>
              </TouchableHighlight>
            </View>
        );
    }
};

export default SelectPlayers;
