import { StyleSheet } from 'react-native';

const buttonDefault = {
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#7C7C7C',
    padding: 5,
    overflow: 'hidden'
};
const buttonSingleChar = {...buttonDefault, width: 40};

const styles = StyleSheet.create({
    menuItemText: {
        color: '#EEE5E9',
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
        backgroundColor: '#210F04'
    },
    listItem: {
        color: '#EEE5E9',
        textAlign: 'center',
        fontSize: 25
    },
    scoreCardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#00ACE9',
        backgroundColor: '#210F04'
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        color: '#EEE5E9',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    baseText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#EEE5E9'
    },
    gridCellText: {
        fontSize: 18,
        color: '#EEE5E9'
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
    },
    button: buttonDefault,
    buttonSingle: buttonSingleChar
});

export default styles;
