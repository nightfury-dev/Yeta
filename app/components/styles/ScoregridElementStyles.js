import { StyleSheet } from 'react-native';

import { ApplicationStyles } from '../../themes';

const inactiveRow = {
    flex: 7,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
};
const activeRow = { ...inactiveRow, backgroundColor: '#313131' };

export default StyleSheet.create({
    baseText: ApplicationStyles.baseText,
    nameText: {
        textAlign: 'left',
        marginLeft: 10
    },
    nameStyle: { flex: 6 },
    activeRow,
    inactiveRow
});
