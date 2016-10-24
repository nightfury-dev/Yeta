import { StyleSheet } from 'react-native';

import { ApplicationStyles, Fonts } from '../../themes';


export default StyleSheet.create({
    container: {
        flex: 1,
        height: 175,
        justifyContent: 'center'
    },
    text: {
        ...ApplicationStyles.baseText,
        fontSize: Fonts.size.huge
    }
});
