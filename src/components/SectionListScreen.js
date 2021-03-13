import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Search from 'react-native-search-box';
import CheckBox from '@react-native-community/checkbox';
import sample from './sample.json';

const result = sample.reduce((accumulator, currentValue) => {
  var newtitle = currentValue.primaryCategory.categoryName;
  var data = currentValue.productName;
  var flag = true;
  accumulator.map((item, index) => {
    if (newtitle === item.title) {
      flag = false;
      accumulator[index].data.push(data);
    }
  });
  if (flag) {
    accumulator.push({title: newtitle, data: [data]});
  }
  return accumulator;
}, []);

class SectionListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickCount: 0,
    };
  }

  Cross = () => {
    Alert.alert('Close APP??', 'DO You Want To Continue', [
      {
        text: 'OK',
        onPress: () => null,
      },
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'destructive',
      },
    ]);
  };

  continueButton = () => {
    return (
      <View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.txt}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderData = (item) => {
    return (
      <View style={styles.data}>
        <Text>{item}</Text>
        <CheckBox
          boxType="circle"
          style={styles.checkbox}
          onFillColor={'#4f8080'}
          onCheckColor={'white'}
          onValueChange={(count) =>
            count
              ? this.setState({tickCount: this.state.tickCount + 1})
              : this.setState({tickCount: this.state.tickCount - 1})
          }
        />
      </View>
    );
  };

  render() {
    return (
      <>
        <LinearGradient
          style={styles.linear}
          colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)']}>
          <View style={styles.headerstyle}>
            <Text style={styles.text}>
              Store Selected:
              <Text style={styles.heading}>Coop Mondal Aby</Text>
            </Text>
            <TouchableOpacity onPress={this.Cross}>
              <Image
                style={styles.icon}
                source={require('../assets/crossmark.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchbar}>
            <Search placeholder="Search" />
          </View>
        </LinearGradient>

        <View style={styles.container}>
          <View>
            <SectionList
              sections={result}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => this.renderData(item)}
              renderSectionHeader={({section: {title}}) => (
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{title}</Text>
                </View>
              )}
            />
          </View>
        </View>
        {this.state.tickCount === 0 ? null : this.continueButton()}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    height: 170,
  },
  titleContainer: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchbar: {
    margin: 5,
  },
  headerstyle: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 5,
    height: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },

  text: {
    color: 'white',
    fontSize: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  continueButton: {
    backgroundColor: '#4f8080',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  txt: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    margin: 5,
  },
  data: {
    padding: 15,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 20,
    height: 20,
  },
});

export default SectionListScreen;
