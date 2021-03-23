import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import SignIn from './SignIn';
import JoinIn from './JoinIn';
import {TouchableOpacity} from 'react-native-gesture-handler';
const data = [
  {uri: require('../assets/mainScreenIcons/track.png'), title: 'Track Order'},
  {uri: require('../assets/mainScreenIcons/size.png'), title: 'Size chart'},
  {
    uri: require('../assets/mainScreenIcons/notification.png'),
    title: 'Notifications',
  },
  {
    uri: require('../assets/mainScreenIcons/storelocator.png'),
    title: 'Store Locator',
  },
];
const innerdata = [
  {uri: require('../assets/mainScreenIcons/country.png'), title: 'Country'},
  {uri: require('../assets/mainScreenIcons/language.png'), title: 'Language'},
  {uri: require('../assets/mainScreenIcons/about.png'), title: 'About Us'},
  {uri: require('../assets/mainScreenIcons/faq.png'), title: 'FAQ'},
  {
    uri: require('../assets/mainScreenIcons/shipping.png'),
    title: 'Shipping & Returns',
  },
  {uri: require('../assets/mainScreenIcons/chat.png'), title: 'Chat With Us'},
  {
    uri: require('../assets/mainScreenIcons/rate.png'),
    title: 'Rate Application',
  },
  {
    uri: require('../assets/mainScreenIcons/share.png'),
    title: 'Share Application',
  },
  {
    uri: require('../assets/mainScreenIcons/privacyPolicy.png'),
    title: 'Privacy Policy',
  },
  {
    uri: require('../assets/mainScreenIcons/tnc.png'),
    title: 'Terms & Conditions',
  },
  {
    uri: require('../assets/mainScreenIcons/email.png'),
    title: 'Send Us An Email',
  },
];

const DataStyling = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.inneritem}>
        <Image style={styles.icons} source={item.uri} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.arrowContainer}>
        {item.title === 'Country' ? (
          <View style={styles.rightIcons}>
            <Image style={styles.icons} source={require('../assets/usa.png')} />
            <Text>USD</Text>
          </View>
        ) : null}
        {item.title === 'Language' ? (
          <View style={styles.rightIcons}>
            <Text>ENG</Text>
          </View>
        ) : null}
        <TouchableOpacity>
          <Image
            style={styles.arrow}
            source={require('../assets/mainScreenIcons/arrow.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isSignInScreen: false,
      isJoinInScreen: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({isModalVisible: visible});
  };
  openModalSignInScreen = (value) => {
    this.setState({
      isModalVisible: true,
      isSignInScreen: value,
      isJoinInScreen: false,
    });
  };
  openModalJoinInScreen = (value) => {
    this.setState({
      isModalVisible: true,
      isSignInScreen: false,
      isJoinInScreen: value,
    });
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.headerConatiner}>
            <View>
              <Text style={styles.headerText}>Welcome!</Text>
              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => this.openModalSignInScreen(true)}>
                  <Text>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.verticalLine} />
                <TouchableOpacity
                  onPress={() => this.openModalJoinInScreen(true)}>
                  <Text>JOIN</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                style={styles.img}
                source={require('../assets/mainScreenIcons/profile.png')}
              />
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <ScrollView>
            <View>
              <FlatList
                data={data}
                renderItem={DataStyling}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.innerhorizontalLine} />
            <FlatList
              data={innerdata}
              renderItem={DataStyling}
              keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
              <Text style={styles.footerText}>App Version 4.0.6(1) </Text>
            </View>
          </ScrollView>
          <Modal
            animationType="slide"
            visible={this.state.isModalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.ismodalVisible);
            }}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.crossIcon}
                onPress={() => this.setModalVisible(false)}>
                <Image
                  style={styles.Icon}
                  source={require('../assets/mainScreenIcons/cross.png')}
                />
              </TouchableOpacity>

              <View style={styles.modelheaderContainer}>
                <TouchableOpacity
                  style={this.state.isSignInScreen ? styles.border : null}
                  onPress={() => this.openModalSignInScreen(true)}>
                  <Text style={styles.text}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={this.state.isJoinInScreen ? styles.border : null}
                  onPress={() => this.openModalJoinInScreen(true)}>
                  <Text style={styles.text}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isSignInScreen ? <SignIn /> : <JoinIn />}
          </Modal>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  headerConatiner: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    marginTop: 60,
    paddingRight: 30,
  },
  modelheaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
  },
  border: {
    borderBottomWidth: 5,
    borderColor: 'orange',
  },
  img: {
    width: 70,
    height: 70,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '700',
  },
  verticalLine: {
    borderColor: 'black',
    borderWidth: 1,
    height: 15,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'orange',
    padding: 5,
    marginTop: 10,
    backgroundColor: '#e9db9e',
  },
  horizontalLine: {
    borderWidth: 7,
    borderColor: 'lightgrey',
    marginTop: 20,
  },
  innerhorizontalLine: {
    borderWidth: 7,
    borderColor: 'lightgrey',
  },
  icons: {
    width: 30,
    height: 30,
    margin: 10,
  },
  crossIcon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    padding: 5,
  },
  inneritem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: 20,
    height: 20,
  },
  title: {
    marginLeft: 10,
    fontWeight: '500',
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'lightgrey',
  },
  footerText: {
    color: 'grey',
  },
});
export default Account;
