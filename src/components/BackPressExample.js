import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  BackHandler,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

class BackPressExample extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  onBackPress = () => {
    Alert.alert('Exit App??', ' Do you want to exit ?', [
      {
        text: 'OK',
        onPress: () => BackHandler.exitApp(),
      },
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
    return true;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>
            Press Back Button If You Want To Exit From This App ??
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
});
export default BackPressExample;
