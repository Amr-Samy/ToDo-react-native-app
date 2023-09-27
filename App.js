import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,TouchableOpacity,SafeAreaView ,Image,ImageBackground} from 'react-native';
import { styles } from './styles';
import Input from './components/Input/Input';


export default function App() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const onPress = () => alert("Only God knows when u 'll finish that one");
  
  return (
    
    <View style={styles.container}>
      {/* <ImageBackground source={require('./assets/portal.gif')} style={{ width: 200, height: 200 }} > */}
      <Image source={require('./assets/todo1.png')} style={{width: 100, height:100}}/>
      {/* </ImageBackground> */}
     
      <Text style={styles.text}>What needs to be done ?</Text>
      <Input
        placeholder='Title'
        onChangeText={onChangeText}
        value={text}
      >
      </Input>

      <Input
        placeholder='Description'
        onChangeText={onChangeText}
        value={text}
      >
      </Input>

      <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
        <Text style={styles.text}>save</Text>
      </TouchableOpacity>

    </View>
    
  );
}