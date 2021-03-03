import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

const FunctComponent = (props) => {
   
    return (
        <TouchableOpacity onPress={() => props.onPress(props.index)}>
        <Text style={[{color:'red', fontSize:17}, props.style]}>{props.name}</Text>
    </TouchableOpacity>
    )
}



export default FunctComponent;