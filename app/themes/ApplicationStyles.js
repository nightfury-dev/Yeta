import Colors from './Colors';
import Fonts from './Fonts';
import Metrics from './Metrics';


const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
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
    color: '#EEE5E9',
    fontFamily: Fonts.defaultFontFamily
  },
  button: {
    backgroundColor: Colors.orange
  },
  listItem: {
    padding: 20
  },
  selectedListItem: {
    padding: 20,
    backgroundColor: Colors.selectedListItem
  },
  listSeparator: {
    height: 1,
    backgroundColor: Colors.lightBrown
  }
};

export default ApplicationStyles;
