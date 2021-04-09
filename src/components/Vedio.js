import React from 'react';
import {Dimensions, SafeAreaView, View, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';

const {width} = Dimensions.get('window');

export default class Video extends React.Component {
  render() {
    return (
      <View style={styles.contaiinter}>
        <VideoPlayer
          video={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          videoWidth={width / 2}
          videoHeight={width / 2}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        />
        <SafeAreaView />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
