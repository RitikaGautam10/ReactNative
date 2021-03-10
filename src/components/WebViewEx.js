import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
class WebViewEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView
          onLoadStart={() => {
            this.setState({
              Loading: true,
            });
          }}
          onLoadEnd={() => {
            this.setState({
              Loading: false,
            });
          }}
          source={{uri: 'https://reactnative.dev/'}}
        />
        {this.state.Loading ? (
          <View style={styles.loadingStyle}>
            <ActivityIndicator size={'large'} color={'blue'} animating={true} />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}
export default WebViewEx;

const styles = StyleSheet.create({
  loadingStyle: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
