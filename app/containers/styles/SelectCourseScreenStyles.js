import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    baseText: ApplicationStyles.baseText,
    listSeparator: ApplicationStyles.listSeparator,
    button: {
        backgroundColor: Colors.orange
    }
});
