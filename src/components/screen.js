import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';
const data = [
  {
    uri: require('../assets/fitness1.jpeg'),
    title: 'GYM',
    timer: moment().add(20, 's'),
  },
  {
    uri: require('../assets/fitness2.jpeg'),
    title: 'CARDIO',
    timer: moment().add(30, 's'),
  },
  {
    uri: require('../assets/fitness3.jpeg'),
    title: 'TRADEMILL',
    timer: moment().add(15, 's'),
  },
];
class screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currTime: null,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currTime: new Date().toLocaleString(),
      });
    }, 1000);
  }
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.currentTime}>
            <Text style={styles.text}>
              {moment(this.state.currTime).format('hh:mm:ss')}
            </Text>
          </View>
          <View>
            {data.map((item, index) =>
              moment(this.state.currTime).format('hh:mm:ss') >=
              moment(item.timer).format('hh:mm:ss') ? (
                <View style={styles.expiredbox}>
                  <Text style={styles.text}>TIME EXPIRED</Text>
                </View>
              ) : (
                <View style={styles.box}>
                  <Image style={styles.img} source={item.uri} />
                  <Text style={styles.text}>{item.title}</Text>
                  <View>
                    <Text style={styles.text}>Expire on</Text>
                    <Text style={styles.text}>
                      <Moment
                        date={item.timer}
                        format="hh:mm:ss"
                        element={Text}
                      />
                    </Text>
                  </View>
                </View>
              ),
            )}
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentTime: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
  },
  box: {
    width: 300,
    height: 200,
    borderColor: 'red',
    borderWidth: 1,
    margin: 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expiredbox: {
    width: 300,
    height: 200,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 20,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },
  text: {
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
  },
});
export default screen;
