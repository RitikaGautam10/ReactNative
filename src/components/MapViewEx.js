import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class MapViewEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        latitude: 28.473456,
        longitude: 77.3118968,
      },
      dummyLocations: [
        {title: 'sector 15', latitude: 28.4742954, longitude: 77.3133291},
        {title: 'sector 35', latitude: 28.473456, longitude: 77.315292},
        {title: 'sector 37', latitude: 28.4767, longitude: 77.3111028},
      ],
    };
  }
  handleLocationChange(event) {
    this.setState({currentLocation: {...event.nativeEvent.coordinate}});
  }
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: this.state.currentLocation.latitude,
              longitude: this.state.currentLocation.longitude,
              latitudeDelta: 0.009,
              longitudeDelta: 0.009,
            }}>
            <Marker
              title="My Location"
              coordinate={this.state.currentLocation}
              draggable
              image={require('../assets/mylocation.png')}
              onPress={(event) => this.handleLocationChange(event)}
            />
            {this.state.dummyLocations.map((pointer, index) => (
              <Marker
                key={index}
                coordinate={pointer}
                title={pointer.title}
                image={require('../assets/pointer.png')}
              />
            ))}
          </MapView>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>Current Location Coordinates:</Text>
          <Text style={styles.text}>
            Latitude: {this.state.currentLocation.latitude}
          </Text>
          <Text style={styles.text}>
            Longitude: {this.state.currentLocation.longitude}
          </Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: 500,
    height: 500,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});
export default MapViewEx;
