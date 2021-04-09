import React, {useState} from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Icons from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function ProgressBar() {
  const progress = useTrackPlayerProgress();
  console.log(progress);
  return (
    <View style={styles.progress}>
      <View style={{flex: progress.position, backgroundColor: 'red'}} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'black',
        }}
      />
    </View>
  );
}

function ControlButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');

  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const {style, onNext, onPrevious, onTogglePlayback} = props;

  var middleButtonText = <Icons name={'play'} size={30} />;

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = <Icons name={'pause'} size={30} />;
  }

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{uri: trackArtwork}} />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton
          title={<Icons name={'stepbackward'} size={30} />}
          onPress={onPrevious}
        />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton
          title={<Icons name={'stepforward'} size={30} />}
          onPress={onNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
  },
  cover: {
    width: 240,
    height: 240,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  progress: {
    height: 5,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
