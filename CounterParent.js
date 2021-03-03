import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
import CounterChild from './CounterChild';
class CounterParent extends Component {
  constructor(){
    super();
    console.log('Parent Constructor Called');
    this.state = {
      counter: 0,
    
    }
  }  
static getDerivedStateFromProps(props, state) {
    console.log('Parent getDerivedStateFromProps Called',props,state);
    return null;
}

componentDidMount(){
    console.log('Parent ComponentDidMount Called');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('Parent shouldComponentUpdate Called',nextProps,nextState);
  return true;
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('Parent getSnapshotBeforeUpdate Called '+prevState.counter);
  return null;
}
componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('Parent componentDidUpdate Called = '+ this.state.counter);
}


componentWillUnmount() {
  console.log('Unmount the Parent  Component');

}

incrementCount =() => {
    this.setState({
    counter: this.state.counter + 1
    });
}
     render() {
      console.log('Parent Render');
        return (
          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
            <Button style={styles.button} onPress={this.incrementCount} title="Click Me"/>
              <CounterChild  count={this.state.counter}/>
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      button: {
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        
      }
    })
    export default CounterParent;
