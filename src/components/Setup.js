import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import messaging from '@react-native-firebase/messaging';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      title: '',
    };
  }
  componentDidMount() {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      this.setState({
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
      });
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          this.setState({
            message: remoteMessage.notification.body,
            title: remoteMessage.notification.title,
          });
        }
      });
    messaging().onMessage((remoteMessage) => {
      console.log('OnMessage Title', remoteMessage.notification.title);
      console.log('OnMessage Body', remoteMessage.notification.body);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>See Your Message Here</Text>
        <Text style={styles.text}>{this.state.title}</Text>
        <Text style={styles.text}>{this.state.message}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: 'blue',
  },
  img: {
    width: 100,
    height: 100,
  },
});
export default Setup;
