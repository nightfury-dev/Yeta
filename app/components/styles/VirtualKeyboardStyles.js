import { StyleSheet } from 'react-native';

import { Colors } from '../../themes';


export default StyleSheet.create({
    button: {
        minWidth: 70,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.orange
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    firstRow: {
        backgroundColor: 'blue'
    },
    container: {
        backgroundColor: '#4E342E'
    }
});
