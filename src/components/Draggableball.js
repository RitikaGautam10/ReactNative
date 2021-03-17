import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  PanResponder,
  Animated,
} from 'react-native';

class Draggableball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateBall: new Animated.ValueXY(),
    };

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.animateBall.setOffset({
          x: this.state.animateBall.x._value,
          y: this.state.animateBall.y._value,
        });
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.animateBall.x, dy: this.state.animateBall.y},
      ]),
      onPanResponderRelease: () => {
        this.state.animateBall.flattenOffset();
      },
    });
  }
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={{
              transform: [
                {translateX: this.state.animateBall.x},
                {translateY: this.state.animateBall.y},
              ],
            }}>
            {/* <View style={styles.ball} /> */}
            <Image style={styles.ball} source={require('../assets/ball.png')} />
          </Animated.View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 70,
    height: 70,
  },
});
export default Draggableball;
