import React, {Component, PureComponent} from 'react';
import {
    View, Text 
} from 'react-native';
import FunctComponent from './FunctComponent';
import LifeCycle from './LifeCycle';

class ComponentEx extends Component {
    constructor() {
        super();
        console.log('Constructor');
        this.state = {
            name:'Ayush',
            initial: false
        }
    }

    //  Mounting and Updating

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps',props,state)
    return null
}

//  Mounting 
componentDidMount(){
  console.log('componentDidMount');
  setTimeout(() => {
      this.setState({
          name:'Vibhor',
          initial:true
      })
  }, 5000);
}


getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('getSnapshotBeforeUpdate',prevProps,prevState)
  return null
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('componentDidUpdate',prevProps,prevState,snapshot)
  if(prevState.initial === false){
      setTimeout(() => {
          this.setState({
              initial:false
          })
      }, 3000);
  } 

}

shouldComponentUpdate(nextProps, nextState) {
  console.log('shouldComponentUpdate',nextProps,nextState)
  return true
}


componentWillUnmount() {
    console.log('unmount');
}

    // removeData = () =

    render() {
        console.log('render')
        if(!this.state.initial) {
            return (
                <LifeCycle />
            )
        }
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <FunctComponent index={0} style={{color:'red'}} onPress={(data) => {alert(data)}} name={this.state.name} />
            </View>
        )
    }

}

export default ComponentEx;