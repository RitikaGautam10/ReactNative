import React, {Component} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
class ModalExample extends Component {
  state = {
    IndicatorVisible: false,
    GifShow: false,
  };

  setModalVisible = (visible) => {
    this.setState({IndicatorVisible: visible});
  };

  setGifShow = (value) => {
    this.setState({GifShow: value});
  };

  render() {
    const {IndicatorVisible} = this.state;
    const {GifShow} = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={IndicatorVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.Text}>Custom Activity Indicator!</Text>
              <WaveIndicator color="red" />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setModalVisible(false)}>
                <Text style={styles.textStyle}>
                  Hide Custom Activity Indicator!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Custom Activity Indicator!</Text>
        </TouchableOpacity>

        <Modal animationType="slide" transparent={true} visible={GifShow}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.Text}>Custom GIF!</Text>
              <Image
                style={styles.image}
                source={require('../assets/gif.gif')}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setGifShow(false)}>
                <Text style={styles.textStyle}>Hide Custom GIF!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setGifShow(true)}>
          <Text style={styles.textStyle}>Show Custom GIF!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  modal: {
    marginTop: 200,
    marginBottom: 200,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
  },
  Text: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'green',
    margin: 20,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 100,
  },
});

export default ModalExample;
