import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuItemText: {
        color: '#6A9A1F',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
    menuItem: {
        borderWidth: 1,
        borderColor: '#00ACE9',
        margin: 10
    },
    background: {
        flex: 1,
        backgroundColor: '#FFEFE0'
    },
    listItem: {
        color: '#6A9A1F',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    scoreCardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#00ACE9'
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    baseText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#0E5C06'
    },
    gridCellText: {
        fontSize: 18,
        color: '#0E5C06'
    },
    nameText: {
        textAlign: 'left',
        marginLeft: 10
    },
    scoreGridFirstCell: {
        // backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'flex-start'
    },
    scoreGridLastCell: {
        // backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'flex-end'
    },
    scoreGridCell: {
        // backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'center'
    }
});

export default styles;
