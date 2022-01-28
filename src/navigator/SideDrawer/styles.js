import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  topHeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topHeaderText: {
    fontSize: 20,
    marginLeft: 20,
    color: Colors.maroon,
    fontFamily: Fonts.merriweatherBoldItalic,
  },
  mainMenu: {
    marginTop: 40,
  },
  drawerItems: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  drawerItemsText: {
    fontSize: 15,
    fontFamily: Fonts.merriweatherBold,
    color: Colors.maroon,
  },
  arrow: {
    width: 12,
    height: 12,
  },
});
