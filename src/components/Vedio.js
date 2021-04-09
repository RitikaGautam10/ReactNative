import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';

const {width} = Dimensions.get('window');

export default class Video extends React.Component {
  render() {
    return (
      <View>
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
