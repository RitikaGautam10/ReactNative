import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logOut = this.logOut.bind(this);
    this.logOutAlert = this.logOutAlert.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  logOut = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'SignUpScreen'}],
      });
    } catch (error) {
      console.log(error);
    }
  };
  getData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      const result = JSON.parse(data);
      this.setState(result);
    } catch (error) {
      console.log(error);
    }
  };

  logOutAlert() {
    Alert.alert('Log Out??', 'Do You Really Want to Logout ??', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: this.logOut,
      },
    ]);
  }
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.header}>
          <TouchableOpacity style={styles.logout} onPress={this.logOutAlert}>
            <Text style={styles.text}>LogOut</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome : {this.state.name}</Text>
          <Text style={styles.text}>Your Email : {this.state.email}</Text>
          <Text style={styles.text}>Your PhoneNumber : {this.state.phone}</Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    borderWidth: 1,
    width: 90,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
  header: {
    alignSelf: 'flex-end',
  },
});
export default HomeScreen;
