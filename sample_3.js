import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Component = props => {
  const [fullname, setFullname] = useState('');
  const [firstname, setFN] = useState('');
  const [lastname, setLN] = useState('');

  useEffect(() => {
    setFullname(`${firstname} ${lastname}`);
  }, []);

  return (
    <View>
      <Text>firstname</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={firstname}
        onChangeText={v => setFN(v)}
        key="firstname"
      />
      <Text>lastname</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={lastname}
        onChangeText={v => setLN(v)}
        key="lastname"
      />
      <Text style={{backgroundColor: 'pink'}}>Fullname: {fullname}</Text>
    </View>
  );
};

export default Component;
