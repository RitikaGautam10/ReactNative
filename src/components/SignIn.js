import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class SignIn extends Component {
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <ScrollView>
            <View>
              <View style={styles.modalInnerContainer}>
                <View style={styles.innerContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={'Your Email Address'}
                  />
                  <View style={styles.passButton}>
                    <TextInput placeholder={'Password'} />
                    <TouchableOpacity>
                      <Text>Show</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.forgotContainer}>
                    <Text>Forgot Password?</Text>
                  </View>
                  <View>
                    <TouchableOpacity style={styles.signin}>
                      <Text style={styles.signText}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <View style={styles.circle}>
                      <Text style={styles.circleText}>or</Text>
                    </View>
                    <View style={styles.line} />
                  </View>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.firsttouchButton}>
                      <View style={styles.touch}>
                        <Image
                          style={styles.img}
                          source={require('../assets/google.png')}
                        />
                        <Text style={styles.btnText}>Sign in with Google</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondtouchButton}>
                      <View style={styles.touch}>
                        <Image
                          style={styles.img}
                          source={require('../assets/facebook.png')}
                        />
                        <Text style={styles.secbtnText}>
                          Sign in with Facebook
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.thirdtouchButton}>
                      <View style={styles.touch}>
                        <Image
                          style={styles.img}
                          source={require('../assets/apple.png')}
                        />
                        <Text style={styles.thirdbtnText}>
                          Sign in with Apple
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fourthtouchButton}>
                      <View style={styles.touch}>
                        <Text style={styles.fourthbtnText}>
                          Dont't have an account ?
                        </Text>
                        <TouchableOpacity style={styles.sign}>
                          <Text>Join</Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
  },
  button: {
    borderBottomWidth: 5,
    borderColor: 'orange',
  },
  modalContainer: {
    width: '100%',
    height: '50%',
  },

  modalInnerContainer: {
    justifyContent: 'flex-start',
  },
  textInput: {
    borderWidth: 1,
    height: 55,
    borderColor: 'black',
    margin: 20,
    paddingLeft: 10,
    fontSize: 15,
  },
  passButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    height: 55,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
  },
  forgotContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: '50%',
  },
  circle: {
    borderColor: 'lightgrey',
    borderRadius: 100,
    borderWidth: 1,
    padding: 15,
  },
  circleText: {
    fontSize: 17,
  },
  firsttouchButton: {
    borderWidth: 1,
    marginTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondtouchButton: {
    borderWidth: 1,
    marginTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  thirdtouchButton: {
    borderWidth: 1,
    marginTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fourthtouchButton: {
    borderWidth: 1,
    marginTop: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
  img: {
    width: 40,
    height: 40,
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
  },
  secbtnText: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
    color: 'white',
  },
  thirdbtnText: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
    color: 'white',
  },
  fourthbtnText: {
    fontSize: 15,
    fontWeight: '300',
    paddingLeft: 20,
    color: 'grey',
  },
  signin: {
    borderWidth: 1,
    margin: 20,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
export default SignIn;
