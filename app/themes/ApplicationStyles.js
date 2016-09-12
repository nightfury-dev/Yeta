import Colors from './Colors';


const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.background
        }
    },
    input: {
        color: '#EEE5E9'
    },
    centeredItem: {
        alignSelf: 'center'
    },
    baseText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#EEE5E9'
    },
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
    }
};

export default ApplicationStyles;
