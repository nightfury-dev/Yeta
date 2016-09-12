import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    scoreGridCell: {
        flex: 1,
        alignItems: 'center'
    },
    gridCellText: {
        fontSize: 18,
        color: '#EEE5E9'
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
        borderColor: '#00ACE9',
        backgroundColor: '#210F04'
    }
});
