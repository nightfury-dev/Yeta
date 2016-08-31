import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import styles from '../styles/styles';


class ScorecardEntry extends React.Component {
    render() {
        const rowCells = this.props.collection.map((entry, index) => {
            const cellContent = this.props.getContent(entry);
            return (
                <View style={styles.scoreGridCell}>
                    <Text
                        numberOfLines={1}
                        style={styles.gridCellText}
                        key={index}>
                        {cellContent}
                    </Text>
                </View>
            );
        });
        const firstCell = (
            <View style={styles.scoreGridFirstCell}>
                <Text
                    numberOfLines={1}
                    style={styles.gridCellText}>
                    {this.props.firstCellContent}
                </Text>
            </View>
        );
        return (
            <View style={styles.scoreCardRow}>
                {firstCell}
                {rowCells}
            </View>
        );
    }
};

export default ScorecardEntry;
