import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {addEmployee} from './Database';
class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      salary: '',
      designation: '',
    };
  }
  addData = () => {
    if (this.state.salary > 500000) {
      alert('salary should not exceed 5,00,000');
    } else {
      addEmployee(
        this.state.id,
        this.state.name,
        this.state.designation,
        this.state.salary,
      );
    }

    this.props.navigation.navigate('EmployeeListing');
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({id: text})}
          placeholder="Enter Id"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({name: text})}
          placeholder="Enter Name"
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter Designation"
          onChangeText={(text) => this.setState({designation: text})}
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({salary: text})}
          placeholder="Enter Salary"
        />
        <TouchableOpacity style={styles.but} onPress={this.addData}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default AddEmployee;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    fontSize: 20,
  },
  but: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'yellow',
    width: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  dataContainer: {
    margin: 10,
    backgroundColor: 'red',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    margin: 2,
  },
});
