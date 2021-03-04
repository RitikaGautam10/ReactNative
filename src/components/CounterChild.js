import React,{Component} from 'react';
import{
    View,Text,TouchableOpacity
} from 'react-native';

class CounterChild extends Component{
    constructor(){
        super();
        console.log('Child Constructor Called');
        
      }  
    static getDerivedStateFromProps(props, state) {
        console.log('Child getDerivedStateFromProps Called',props,state)
        return null
    }
    
    componentDidMount(){
        console.log('Child ComponentDidMount Called');
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Child getSnapshotBeforeUpdate Called= '+prevState)
      return null
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('Child componentDidUpdate Called = '+this.props.count);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Child shouldComponentUpdate Called = ',nextProps,nextState)
      return true
    }
    componentWillUnmount() {
      console.log('unmount the Child Component');
    }
    

    render(){
        console.log('Child Render');
        return(
            <View>
            <Text style={{color:'black', fontSize:17}} >You Clicked {this.props.count} time</Text>
            </View>
            )
    }
    
}
    
export default CounterChild;