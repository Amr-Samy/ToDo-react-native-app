import { StyleSheet, Text, TextInput, View ,TouchableOpacity,SafeAreaView ,Image,ImageBackground} from 'react-native';
import { styles } from '../../styles';

const Input = (props) => {
    return (
      <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.text}
      style={styles.input}
      placeholderTextColor="gray" 
    >
    </TextInput>
    );
  };
  
  export default Input;
  