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
import CheckBox from '@react-native-community/checkbox';
const list = [
  {id: 1, value: true, name: 'Male', selected: false},
  {id: 2, value: false, name: 'Female', selected: false},
];
class SignIn extends Component {
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.modalContainer}>
          <ScrollView>
            <View style={styles.modalInnerContainer}>
              <View>
                <TextInput
                  style={styles.textInput}
                  placeholder={'First Name'}
                />
                <TextInput style={styles.textInput} placeholder={'Last Name'} />

                <TextInput
                  style={styles.textInput}
                  placeholder={'Your Email'}
                />
                <View style={styles.passButton}>
                  <TextInput placeholder={'Password'} />
                  <TouchableOpacity>
                    <Text>Show</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.phoneButton}>
                  <Image
                    style={styles.img}
                    source={require('../assets/usa.png')}
                  />
                  <Text>+1</Text>
                  <View style={styles.verticalLine} />
                  <TextInput placeholder={'123 456 7890'} />
                </View>
                <View style={styles.radioButtonContainer}>
                  {list.map((item) => (
                    <>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles.radioButton}>
                        <View style={styles.radioButtonIcon} />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.radioButtonText}>{item.name}</Text>
                      </TouchableOpacity>
                    </>
                  ))}
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    boxType={'square'}
                    style={styles.checkbox}
                    value={true}
                    onFillColor="orange"
                  />
                  <Text style={styles.checkText}>
                    Be the first to know new arrivals, sales & promos by
                    submitting your email You can opt at any time.
                    <TouchableOpacity>
                      <Text>privacy Policy</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.signin}>
                    <Text style={styles.signText}>Join Now</Text>
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
                        Already have an account ?
                      </Text>
                      <TouchableOpacity style={styles.sign}>
                        <Text>Sign In</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
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
  modalContainer: {
    flex: 1,
  },
  modalInnerContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    height: '60%',
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 15,
  },
  passButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 5,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 5,
  },
  verticalLine: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 20,
    margin: 20,
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
  forgotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  firsttouchButton: {
    borderWidth: 1,
    marginTop: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondtouchButton: {
    borderWidth: 1,
    marginTop: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  thirdtouchButton: {
    borderWidth: 1,
    marginTop: 10,
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
    margin: 20,
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
  sign: {
    paddingLeft: 20,
    fontSize: 15,
  },
  radioButtonContainer: {
    flexDirection: 'row',
  },
  radioButton: {
    flexDirection: 'row',
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  radioButtonIcon: {
    flexDirection: 'row',
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
  checkboxContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    alignSelf: 'center',
  },
  checkText: {
    margin: 10,
  },
});
export default SignIn;
