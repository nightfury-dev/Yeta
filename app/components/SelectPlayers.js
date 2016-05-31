import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/styles';


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
        const text = (rowData.selected ? '* ' : '') + rowData.name;
        return (
            <TouchableHighlight onPress={this.handleSelection.bind(this, rowData)}>
                <Text style={styles.listItem}>{text}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.state.players);

        return (
            <View style={styles.background}>
              <ListView
                  dataSource={dataSource}
                  renderRow={this.renderRow.bind(this)}
              />
              <TouchableHighlight style={styles.menuItem}
                  onPress={this.playersSelected.bind(this)}>
                  <Text style={styles.menuItemText}>Continue</Text>
              </TouchableHighlight>
            </View>
        );
    }
};

export default SelectPlayers;
