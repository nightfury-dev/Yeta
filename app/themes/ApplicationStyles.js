import ColorPalette from './ColorPalette';
import Fonts from './Fonts';


const ApplicationStyles = {
  input: {
    color: '#EEE5E9'
  },
  centeredItem: {
    alignSelf: 'center'
  },
  baseText: {
    textAlign: 'center',
    fontSize: Fonts.size.normal,
    color: '#455a64',
    fontFamily: Fonts.defaultFontFamily
  },
  button: {
    backgroundColor: ColorPalette.primary.default
  },
  listItem: {
    padding: 20
  },
  listSeparator: {
    height: 1,
    backgroundColor: ColorPalette.divider
  }
};

export default ApplicationStyles;
