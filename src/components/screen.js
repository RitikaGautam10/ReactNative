import React, {Component} from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
const {width} = Dimensions.get('window');

class screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
      scrollX: new Animated.Value(0),
    };
  }
  data = [
    {
      uri: require('../assets/fitness1.jpeg'),
      text: 'FITNESS',
      details:
        'Success usually comes to those who are too busy to be looking for it.',
    },
    {
      uri: require('../assets/fitness2.jpeg'),
      text: 'TRADEMILL',
      details:
        'If you think lifting is dangerous, try being weak. Being weak is dangerous.',
    },
    {
      uri: require('../assets/fitness3.jpeg'),
      text: 'CARDIO',
      details: 'Action is the foundational key to all success.',
    },
  ];
  Animation = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(),
    );
  };
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.fitnessContainer}>
            <ScrollView
              horizontal={true}
              onScrollBeginDrag={this.Animation}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: this.state.scrollX}}}],
                {useNativeDriver: false},
              )}>
              {this.data.map(({uri, text, details}, i) => (
                <View style={styles.firstContainer}>
                  <Animated.View
                    style={[
                      styles.fadingContainer,
                      {
                        opacity: this.state.fadeAnim,
                      },
                    ]}>
                    <Image key={i} style={styles.image} source={uri} />

                    <View style={styles.textContainer}>
                      <Text style={styles.text}>{text}</Text>
                      <Text style={styles.details}>{details}</Text>
                    </View>
                  </Animated.View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.dotContainer}>
              {this.data.map((_, i) => {
                const inputRange = [
                  (i - 1) * width,
                  i * width,
                  (i + 1) * width,
                ];
                const dotColor = this.state.scrollX.interpolate({
                  inputRange,
                  outputRange: ['white', 'teal', 'white'],
                  extroplate: 'clamp',
                });

                return (
                  <Animated.View
                    key={i}
                    style={[styles.animatedDots, {backgroundColor: dotColor}]}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fitnessContainer: {
    width: width,
    height: 600,
  },
  firstContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadingContainer: {
    width: width,
    height: 500,
  },
  image: {
    width: width,
    height: 360,
    borderRadius: 30,
  },
  textContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'teal',
    textAlign: 'center',
    fontWeight: '700',
  },
  details: {
    textAlign: 'center',
    margin: 10,
    fontSize: 15,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedDots: {
    height: 20,
    width: 20,
    borderColor: 'teal',
    margin: 5,
    borderRadius: 100,
    borderWidth: 1,
  },
});
export default screen;
