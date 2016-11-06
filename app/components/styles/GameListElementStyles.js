import { StyleSheet } from 'react-native';

import { ApplicationStyles, Fonts } from '../../themes';

const bigText = { ...ApplicationStyles.baseText, textAlign: 'left' };

const tinyText = {
    ...ApplicationStyles.baseText,
    fontSize: Fonts.size.tiny,
    textAlign: 'left'
};

const nameText = {
    ...tinyText,
    textAlign: 'right'
};

export default StyleSheet.create({
    bigText,
    tinyText,
    listItem: {
        ...ApplicationStyles.listItem,
        flexDirection: 'row'
    },
    selectedListItem: ApplicationStyles.selectedListItem,
    rightContainer: {
        marginLeft: 20,
        alignSelf: 'flex-start'
    },
    rightOuterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    nameText
});
