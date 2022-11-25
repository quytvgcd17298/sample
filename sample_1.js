import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Component = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');


  useEffect(()=>{
    console.log({email,pwd})
  },[]);
   
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={email}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
        key="email"
      />
      <Text>Password</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={pwd}
        onChangeText={(value) => setPwd(value)}
        secureTextEntry={true}
        key="pwd"
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text style={{backgroundColor: 'pink'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
