import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';


export default StyleSheet.create({
    input: {
        ...ApplicationStyles.input,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    button: {
        backgroundColor: Colors.orange
    },
    container: {
        flexDirection: 'row',
        // marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightBrown
    }
});
