import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FocusedInput from './FocusedInput';
class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  }

  handleName = (text) => {
    this.setState({name: text});
  };
  handleEmail = (text) => {
    this.setState({email: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };
  handlePhone = (text) => {
    this.setState({phone: text});
  };

  saveData = async () => {
    const obj = this.state;
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(obj));
      this.props.navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../assets/bgimage.jpeg')}>
          <View style={styles.SignUpScreenContainer}>
            <ImageBackground
              style={styles.background}
              imageStyle={{borderRadius: 30}}
              source={require('../assets/bgimage3.jpeg')}>
              <View style={styles.header}>
                <Text style={styles.headerText}>Let's Get Started!</Text>
                <Text style={styles.headerDescription}>
                  Create an account to Q Allure to get all features
                </Text>
              </View>
              <FocusedInput
                placeholder={'UserName'}
                inputText={this.handleName}
                secureText={false}
                icon={require('../assets/user.png')}
              />
              <FocusedInput
                placeholder={'Email'}
                inputText={this.handleEmail}
                secureText={false}
                icon={require('../assets/email.png')}
              />
              <FocusedInput
                placeholder={'Phone'}
                inputText={this.handlePhone}
                secureText={false}
                icon={require('../assets/phone.png')}
              />
              <FocusedInput
                placeholder={'Password'}
                inputText={this.handlePassword}
                secureText={true}
                icon={require('../assets/password.png')}
              />
              <FocusedInput
                placeholder={'Confrirm Password'}
                inputText={this.handlePassword}
                secureText={true}
                icon={require('../assets/password.png')}
              />

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={this.saveData}>
                  <Text style={styles.buttonText}>CREATE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  Already have an account?
                  <TouchableOpacity>
                    <Text style={styles.login}>Login Here</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  SignUpScreenContainer: {
    width: '90%',
    height: '95%',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 40,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 20,
  },
  header: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '700',
  },
  headerDescription: {
    color: 'grey',
    marginTop: 10,
    marginBottom: 20,
  },

  buttonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    borderRadius: 30,
    borderWidth: 1,
    width: 170,
    height: 60,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  footer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    color: 'blue',
  },
});
export default SignUpScreen;
