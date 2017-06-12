import { ColorPalette } from './Colors';
import Fonts from './Fonts';
import Metrics from './Metrics';


const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: ColorPalette.background,
      paddingTop: Metrics.navBarHeight
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
