import React, {Component, PureComponent} from 'react';
import {
    View, Text 
} from 'react-native';
import FunctComponent from './FunctComponent';

class LifeCycle extends Component {
    constructor() {
        super();
        // console.log('Constructor');
        this.state = {
            name:'Ayush'
        }
    }

    //  Mounting and Updating

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps',props,state)
//     return null
// }

//  Mounting 
// componentDidMount(){
//   console.log('componentDidMount');
//   setTimeout(() => {
//       this.setState({
//           name:'Vibhor'
//       })
//   }, 3000);
// }


// getSnapshotBeforeUpdate(prevProps, prevState) {
//   console.log('getSnapshotBeforeUpdate',prevProps,prevState)
//   return null
// }

// componentDidUpdate(prevProps, prevState, snapshot) {
//   console.log('componentDidUpdate',prevProps,prevState,snapshot)

// }

// shouldComponentUpdate(nextProps, nextState) {
//   console.log('shouldComponentUpdate',nextProps,nextState)
//   return true
// }


componentWillUnmount() {
    console.log('LifeCycle unmount');
}

    // removeData = () =

    render() {
        console.log('render')
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'green'}}>
                <FunctComponent index={0} style={{color:'red'}} onPress={(data) => {alert(data)}} name={this.state.name} />
            </View>
        )
    }

}

export default LifeCycle;