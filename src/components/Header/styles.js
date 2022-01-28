import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.cream,
    height: 40,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: Fonts.merriweatherBoldItalic,
  },
});
