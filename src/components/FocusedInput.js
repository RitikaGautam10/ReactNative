import React, {Component} from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';

class FocusedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }
  onDataEntry = () => {
    this.setState({isFocused: true});
  };
  render() {
    return (
      <>
        <View style={!this.state.isFocused ? styles.unFocused : styles.Focused}>
          <Image style={styles.ImageStyle} source={this.props.icon} />
          <TextInput
            placeholder={this.props.placeholder}
            onFocus={this.onDataEntry}
            onChangeText={this.props.inputText}
            secureTextEntry={this.props.secureText}
            style={
              !this.state.isFocused ? styles.unFocusedText : styles.FocusedText
            }
          />
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  unFocused: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    height: 70,
    borderRadius: 30,
    margin: 10,
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  Focused: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    height: 70,
    borderRadius: 30,
    margin: 10,
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  unFocusedText: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  FocusedText: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: 'blue',
  },
  ImageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
export default FocusedInput;
