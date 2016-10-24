import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../themes';


export default StyleSheet.create({
    scoreGridCell: {
        flex: 1,
        alignItems: 'center'
    },
    gridCellText: {
        fontSize: Fonts.size.small,
        color: Colors.text
    },
    scoreGridFirstCell: {
        flex: 1,
        alignItems: 'flex-start'
    },
    scoreCardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: Colors.orange,
    }
});
