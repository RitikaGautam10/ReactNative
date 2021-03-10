import React, {useState} from 'react';
import {View, Switch, Text, StyleSheet, SafeAreaView} from 'react-native';
import Slider from '@react-native-community/slider';

const SwitchNSlider = () => {
  const [isOn, onValueChange] = useState(false);
  const [value, setValue] = useState(1);
  const toggleSwitch = () => onValueChange((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchStyle}>
        <Switch
          value={isOn}
          trackColor={{false: 'grey', true: 'red'}}
          thumbColor={isOn ? 'black' : 'white'}
          onValueChange={toggleSwitch}
        />
        {isOn ? (
          <View style={styles.sliderStyle}>
            <Slider
              style={styles.slide}
              minimumValue={1}
              maximumValue={15}
              value={value}
              minimumTrackTintColor="orange"
              step={2}
              maximumTrackTintColor="grey"
              onValueChange={setValue}
            />
            <Text style={styles.text}>Value:{value}</Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
export default SwitchNSlider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  sliderStyle: {
    margin: 20,
  },
  slide: {
    width: 200,
    height: 40,
    margin: 70,
  },
  text: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});
