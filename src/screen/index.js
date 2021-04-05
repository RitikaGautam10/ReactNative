import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

@inject('store')
@observer
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  deleteData = (id) => {
    Alert.alert('Delete', 'Do you really want to delete this ToDo ?', [
      {text: 'Yes', onPress: () => this.props.store.removetodo(id)},
      {text: 'No', onPress: () => null},
    ]);
  };
  updateData = ({Id, Title, Detail}) => {
    this.props.navigation.navigate('AddData', {
      Id: Id,
      Title: Title,
      Detail: Detail,
    });
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Simple Note Taker</Text>
          </View>
          {this.props.store.list.length !== 0 ? (
            <View style={styles.midContainer}>
              {this.props.store.list.map((item) => (
                <View style={styles.innerContainer}>
                  <TouchableOpacity
                    onPress={() => this.updateData({...item})}
                    onLongPress={() => this.deleteData(item.Id)}>
                    <Text style={styles.title}>{item.Title}</Text>
                    <Text style={styles.detail}>{item.Detail}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.mainScreen}>
              <Text style={styles.txt}>You do not have any notes</Text>
            </View>
          )}

          <View style={styles.mainContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddData')}>
              <View style={styles.btn}>
                <Image
                  style={styles.img}
                  source={require('../assets/plus.png')}
                />
                <Text>ADD NEW NOTE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default ToDoList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  img: {
    width: 30,
    height: 30,
  },
  cross: {
    paddingLeft: 60,
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    margin: 13,
  },
  txt: {
    fontSize: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 50,
    paddingRight: 30,
  },

  midContainer: {
    margin: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
  },
  detail: {
    fontSize: 17,
  },
  btn: {
    flexDirection: 'row',
    borderColor: 'cyan',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'cyan',
  },
});
