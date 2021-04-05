import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
var Id = 0;
@inject('store')
@observer
class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      details: '',
      updatedTitle: '',
      updatedDetail: '',
      updatedId: '',
      isModalVisible: false,
    };
  }
  componentDidMount() {
    this.updatedValue();
  }
  updatedValue() {
    if (this.props.route.params) {
      this.setState({
        updatedId: this.props.route.params.Id,
        updatedTitle: this.props.route.params.Title,
        updatedDetail: this.props.route.params.Detail,
        isModalVisible: true,
      });
    }
  }
  changedText = (text) => {
    this.setState({
      text: text,
    });
  };
  changedDetails = (text) => {
    this.setState({
      details: text,
    });
  };
  changedUpdatedText = (text) => {
    this.setState({
      updatedTitle: text,
    });
  };
  changedUpdatedDetail = (text) => {
    this.setState({
      updatedDetail: text,
    });
  };
  handleText = () => {
    this.props.store.todo({
      Id: Id++,
      Title: this.state.text,
      Detail: this.state.details,
    });
    this.props.navigation.navigate('ToDoList');
  };

  handleUpdatedText = () => {
    this.props.store.Updatedtodo({
      Id: this.state.updatedId,
      Title: this.state.updatedTitle,
      Detail: this.state.updatedDetail,
    });
    this.props.navigation.navigate('ToDoList');
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Add a New Note</Text>
            <TouchableOpacity
              style={styles.crossIcon}
              onPress={() => this.props.navigation.navigate('ToDoList')}>
              <Image
                style={styles.icon}
                source={require('../assets/cross.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <TextInput
              multiline={true}
              style={styles.title}
              placeholder="Enter Title"
              onChangeText={(text) => this.changedText(text)}
            />
          </View>
          <View style={styles.noteContainer}>
            <TextInput
              multiline={true}
              style={styles.note}
              placeholder="Add a Note here"
              onChangeText={(text) => this.changedDetails(text)}
            />
          </View>
          <View style={styles.mainContainer}>
            <TouchableOpacity onPress={this.handleText}>
              <Image
                style={styles.img}
                source={require('../assets/check.png')}
              />
            </TouchableOpacity>
          </View>

          <Modal visible={this.state.isModalVisible}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Add a update Note</Text>
            </View>
            <View style={styles.titleContainer}>
              <TextInput
                multiline={true}
                style={styles.title}
                placeholder="Enter Title"
                onChangeText={(text) => this.changedUpdatedText(text)}
              />
            </View>
            <View style={styles.noteContainer}>
              <TextInput
                multiline={true}
                style={styles.note}
                placeholder="Add a Note here"
                onChangeText={(text) => this.changedUpdatedDetail(text)}
              />
            </View>
            <View style={styles.mainContainer}>
              <TouchableOpacity onPress={this.handleUpdatedText}>
                <Image
                  style={styles.img}
                  source={require('../assets/check.png')}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}

export default AddData;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  titleContainer: {
    margin: 12,
    borderWidth: 2,
    padding: 10,
    height: 60,

    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    marginTop: 30,
  },
  note: {
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img: {
    width: 50,
    height: 50,
  },
  cross: {
    paddingLeft: 60,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 50,
    paddingRight: 30,
  },
  noteContainer: {
    height: 300,
    borderWidth: 2,
    margin: 12,
    padding: 15,
    borderRadius: 10,
  },
  crossIcon: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
