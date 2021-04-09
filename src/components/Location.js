import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Linking,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
    };
  }
  componentDidMount() {
    this.getCurrentLocation();
  }

  checkUserPermission = async () => {
    try {
      let permission = await Geolocation.requestAuthorization('whenInUse');
      if (permission === 'denied') {
        Linking.openSettings();
      }
      return permission;
    } catch (error) {
      console.log('Permission error: ', error);
    }
  };
  getCurrentLocation = async () => {
    const permission = await this.checkUserPermission();
    if (permission === 'granted') {
      Geolocation.getCurrentPosition(
        (location) => {
          console.log('User Location : ', location);
          this.setState({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        },
        {timeout: 3000, enableHighAccuracy: true},
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.lat !== 0 && this.state.lng !== 0 && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: this.state.lat,
              longitude: this.state.lng,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            showsUserLocation={true}>
            <Marker
              title="My Location"
              coordinate={{latitude: this.state.lat, longitude: this.state.lng}}
            />
          </MapView>
        )}

        <Text>
          My Location : Latitute : {this.state.lat} Longitude :{this.state.lng}
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.but}
            onPress={() => this.props.navigation.navigate('Vedio')}>
            <Text>Want to see Vedio?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.but}
            onPress={() => this.props.navigation.navigate('Song')}>
            <Text>Want to Listen Song?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  map: {
    width: SCREEN_WIDTH,
    height: 450,
  },
  button: {
    marginTop: 60,
    alignItems: 'center',
  },
  but: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    backgroundColor: 'yellow',
  },
});
