import { StyleSheet } from 'react-native';

import { ApplicationStyles, Fonts } from '../../themes';


export default StyleSheet.create({
    baseText: ApplicationStyles.baseText,
    listItem: ApplicationStyles.listItem,
    selectedListItem: ApplicationStyles.selectedListItem,
    tinyText: {
        ...ApplicationStyles.baseText,
        fontSize: Fonts.size.tiny
    }
});
