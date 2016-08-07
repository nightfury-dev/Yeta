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
        justifyContent: 'space-between'
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    baseText: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'Roboto',
        color: '#0E5C06'
    },
    nameText: {
        textAlign: 'left',
        marginLeft: 10
    }
});

export default styles;
