import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles/ComponentStyles';


function ScorecardEntry(props) {
    const rowCells = props.collection.map((entry, index) => {
        const cellContent = props.getContent(entry);
        return (<View style={styles.scoreGridCell}>
          <Text
            numberOfLines={1}
            style={styles.gridCellText}
            key={index}
          >
            {cellContent}
          </Text>
        </View>);
    });
    const firstCell = (<View style={styles.scoreGridFirstCell}>
      <Text
        numberOfLines={1}
        style={styles.gridCellText}
      >
        {props.firstCellContent}
      </Text>
    </View>);
    return (<View style={styles.scoreCardRow}>
      {firstCell}
      {rowCells}
    </View>);
}

ScorecardEntry.propTypes = {
    collection: React.PropTypes.array.isRequired,
    getContent: React.PropTypes.func.isRequired,
    firstCellContent: React.PropTypes.string.isRequired
};

export default ScorecardEntry;
