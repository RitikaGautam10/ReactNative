/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Clipboard from '@react-native-clipboard/clipboard';
const Stack = createStackNavigator();

function NewScreen() {
  const [copiedText, readText] = useState('');
  const readCopiedText = async () => {
    try {
      const copied = await Clipboard.getString();
      readText(copied);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View>
          <Text style={styles.text}>Your Copied Text : {copiedText}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={readCopiedText}>
          <Text>Read Copied Text Here !!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const Home = ({navigation}) => {
  const [input, setInput] = useState('');
  const WriteIntoClipboard = () => {
    Clipboard.setString(input);
    alert('Your text copied');
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.midContainter}>
          <Text style={styles.text}>Enter Text To Copy:</Text>
          <TextInput
            placeholder={'Enter Something...'}
            style={styles.textInput}
            onChangeText={(data) => setInput(data)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onLongPress={WriteIntoClipboard}>
            <Text>Copy Text</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NewScreen')}>
            <Text>Go To Next Page</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const ClipboardExample = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerTitle: 'Home Screen'}}
          name={'Home'}
          component={Home}
        />

        <Stack.Screen name={'NewScreen'} component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 70,
    margin: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  button: {
    margin: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  midContainter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    alignItems: 'center',
  },
});
export default ClipboardExample;
