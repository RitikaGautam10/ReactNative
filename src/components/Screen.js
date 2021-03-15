import React, {Component} from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();

function Search() {
  return (
    <View style={styles.common}>
      {Alert.alert('Search Bar Clicked', 'Do You Want To Continue??', [
        {
          text: 'OK',
          onPress: () => null,
          style: 'default',
        },
        {text: 'CANCEL', onPress: () => null, style: 'destructive'},
      ])}
    </View>
  );
}
function Call() {
  return (
    <View style={styles.common}>
      {Alert.alert('Call Bar Clicked', 'Do You Want To Continue??', [
        {
          text: 'OK',
          onPress: () => null,
          style: 'default',
        },
        {text: 'CANCEL', onPress: () => null, style: 'destructive'},
      ])}
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.common}>
      {Alert.alert('Notifications Bar Clicked', 'Do You Want To Continue??', [
        {
          text: 'OK',
          onPress: () => null,
          style: 'default',
        },
        {text: 'CANCEL', onPress: () => null, style: 'destructive'},
      ])}
    </View>
  );
}
function Account() {
  return (
    <View style={styles.common}>
      {Alert.alert('Account Bar Clicked', 'Do You Want To Continue??', [
        {
          text: 'OK',
          onPress: () => null,
          style: 'default',
        },
        {text: 'CANCEL', onPress: () => null, style: 'destructive'},
      ])}
    </View>
  );
}
class Screen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
            labelStyle: {fontSize: 13},
            style: {
              height: 90,
            },
          }}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('../assets/ActiveHome1.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('../assets/Home1.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('../assets/activesearch.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('../assets/search.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Call"
            component={Call}
            options={{
              tabBarLabel: 'Call',
              tabBarIcon: () => {
                return (
                  <Image
                    style={styles.callIcon}
                    source={require('../assets/phone.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: 'Notifications',
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('../assets/activenotification1.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('../assets/notification1.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('../assets/activeaccount.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('../assets/account1.png')}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon: {
    height: 30,
    width: 30,
  },
  common: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callIcon: {
    position: 'absolute',
    bottom: 20,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: 'purple',
    borderRadius: 100,
  },
});
export default Screen;
