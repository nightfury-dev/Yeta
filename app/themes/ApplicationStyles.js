import Colors from './Colors';


const buttonDefault = {
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#7C7C7C',
    padding: 5,
    overflow: 'hidden'
};
const buttonSingleChar = { ...buttonDefault, width: 40 };

const ApplicationStyles = {
    menuItemText: {
        color: '#EEE5E9',
        textAlign: 'center',
        fontSize: 24,
    },
    menuItem: {
        margin: 10,
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: '#210F04'
    },
    listItem: {
        color: '#EEE5E9',
        textAlign: 'center',
        fontSize: 25,
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#DF878B',
        alignItems: 'center'
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
    scoreGridCell: {
        // backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'center'
    },
    button: buttonDefault,
    buttonSingle: buttonSingleChar,
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center'
    },
    modalInnerContainer: {
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: Colors.modalBackground,
        padding: 20,
        overflow: 'hidden',
        margin: 25
    },
    modalButton: {
        margin: 10
    },
    centeredItem: {
        alignSelf: 'center'
    }
};

export default ApplicationStyles;
