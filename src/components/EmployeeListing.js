import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  getEmployee,
  addEmployee,
  sortEmployeeAsc,
  sortEmployeeDsc,
  searchEmployee,
  deleteEmployee,
} from './Database';

class EmployeeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      id: '',
      name: '',
      salary: '',
      designation: '',
    };
  }
  componentDidMount() {
    this.setUser();
  }
  setUser = () => {
    this.setState({
      user: getEmployee(),
    });
  };

  DataStyling({item}) {
    return (
      <View style={styles.dataContainer}>
        <Text style={styles.text}>{item.Emp_id}</Text>
        <Text style={styles.text}>{item.Emp_name}</Text>
        <Text style={styles.text}>{item.Emp_sal}</Text>
        <Text style={styles.text}>{item.Emp_desg}</Text>
      </View>
    );
  }
  addData = () => {
    addEmployee(
      this.state.id,
      this.state.name,
      this.state.designation,
      this.state.salary,
    );
    this.setState({
      isModalVisible: false,
    });
  };

  sortEmployeesInAsc = () => {
    if (this.state.user.length > 2) {
      this.setState({user: sortEmployeeAsc()});
    }
  };
  sortEmployeesInDsc = () => {
    if (this.state.user.length > 2) {
      this.setState({user: sortEmployeeDsc()});
    }
  };
  delete = () => {
    deleteEmployee();
  };
  searchEmployees = (value) => {
    this.setState({user: searchEmployee(value)});
  };
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.reloadButton}>
            <TouchableOpacity style={styles.but} onPress={() => this.setUser()}>
              <Text>Reload</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.but}
              onPress={() => this.props.navigation.navigate('AddEmployee')}>
              <Text>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.but}
              onPress={() => this.sortEmployeesInAsc()}>
              <Text>Sort Ascending</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.but}
              onPress={() => this.sortEmployeesInDsc()}>
              <Text>Sort Descending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but} onPress={() => this.delete()}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Search"
              style={styles.searchContainer}
              onChangeText={(text) => this.searchEmployees(text)}
            />
          </View>

          {this.state.user.length < 1 ? (
            <View style={styles.empty}>
              <Text style={styles.emptyTxt}>
                No employees found. Please Add employee
              </Text>
            </View>
          ) : (
            <FlatList
              data={this.state.user}
              renderItem={this.DataStyling}
              keyExtractor={(item, index) => item + index}
            />
          )}
        </View>
      </>
    );
  }
}
export default EmployeeListing;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    // backgroundColor: 'red',
  },
  textinput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
  },
  modalContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    padding: 10,
    backgroundColor: 'white',
  },
  addbutton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  but: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#f78da7',
    borderRadius: 10,
  },
  dataContainer: {
    margin: 10,
    backgroundColor: '#66c495',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    margin: 2,
  },
  searchContainer: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 10,
    fontSize: 18,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    fontSize: 20,
    alignSelf: 'center',
  },
  submit: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'yellow',
    width: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  reloadButton: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
