import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Component = props => {
  const [count, setCount] = useState(0);

  const adjustCount = amount => {
    // problem 1
    setCount(count + amount);
    // problem 2
    console.log('count', count);
  };

  useEffect(()=>{
    adjustCount()
  },[count])

  return (
    <View>
      <TouchableOpacity onPress={() => adjustCount(-1)}>
        <Text style={{backgroundColor: 'pink'}}>-</Text>
      </TouchableOpacity>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={() => adjustCount(1)}>
        <Text style={{backgroundColor: 'pink'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Component;
