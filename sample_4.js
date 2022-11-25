import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Component = props => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const account = {email, pwd};
    console.log('account', account);
  }, []);

  return (
    <View style={{backgroundColor: darkMode ? 'darkgrey' : 'pink'}}>
      <Text>Email</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={email}
        onChangeText={v => setEmail(v)}
        keyboardType="email-address"
        key="email"
      />
      <Text>Password</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={pwd}
        onChangeText={v => setPwd(v)}
        secureTextEntry
        key="password"
      />
      <TouchableOpacity onPress={() => setDarkMode(old => !old)}>
        <Text style={{backgroundColor: darkMode ? 'deeppink' : 'grey'}}>
          toggle darkmode
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
