import * as _ from 'lodash';
import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Button, List, ListItem } from 'native-base';

import styles from '../styles/styles';


class SelectPlayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.players.map((p) =>
                _.extend({ selected: false }, p)
            )
        };

        this.renderRow = this.renderRow.bind(this);
        this.playersSelected = this.playersSelected.bind(this);
    }

    playersSelected() {
        const selectedPlayers = this.state.players.filter((p) => p.selected);
        this.props.playersSelected(selectedPlayers);
    }

    handleSelection(player) {
        const i = _.findIndex(this.state.players, (p) => p.id === player.id);
        const players = [
            ...this.state.players.slice(0, i),
            { ...player, selected: !player.selected },
            ...this.state.players.slice(i + 1)
        ];
        this.setState({ players });
    }

    renderRow(rowData) {
        return (<ListItem button onPress={() => this.handleSelection(rowData)}>
          <Text style={styles.baseText}>{rowData.name}</Text>
          <CheckBox checked={rowData.selected} />
        </ListItem>);
    }

    render() {
        return (<View style={styles.background}>
          <List
            dataArray={this.state.players}
            renderRow={this.renderRow}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button onPress={this.playersSelected}>Continue</Button>
          </View>
        </View>);
    }
}

SelectPlayers.propTypes = {
    players: React.PropTypes.array.isRequired,
    playersSelected: React.PropTypes.func.isRequired
};

export default SelectPlayers;
