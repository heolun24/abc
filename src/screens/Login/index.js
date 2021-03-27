import React,{useState} from 'react';
import { View,
  Text,
  StyleSheet,
  TextInput,
  Image, 
  TouchableOpacity, 
  Keyboard, 
  TouchableWithoutFeedback,
  Alert 

  } from 'react-native';

import User from '../../services/User';

function Login({navigation}){
      const [username, setusername] = useState ('');
      const [password, setpassword] = useState ('');

      const handleLogin = () =>{
          
              if(username.trim() === ''){
                return Alert.alert('Tên đăng nhập không được để trống')
              }
              if(password.trim() === ''){
                return Alert.alert('Mật khẩu không được để trống')
              }
               if(username !== User.username || password !== User.password){
                return Alert.alert('Tài khoản hoặc mật khẩu không đúng')
              }


          navigation.navigate('Products');
      }


  return ( 
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.waper}>
         <Image 
          source={require('../../img/logo.jpg')}
          style={styles.image}
       ></Image>
      <TextInput
          style={[styles.input, styles.username]}
          placeholder='Tên đăng nhập'
          onChangeText={(text) => setusername(text)}
       ></TextInput>
      <TextInput 
           style={styles.input}
           placeholder='Mật khẩu'
           secureTextEntry
           onChangeText={(text) => setusername(password)}
      ></TextInput>

      <TouchableOpacity 
      
         style={styles.bt}
         onPress={handleLogin}
      
      >
        <Text style={styles.tlg}>Đăng nhập</Text>
      </TouchableOpacity>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
 
  input:{
     width: 330,
    height: 40,
    backgroundColor: '#f5f5dc',
    borderRadius:7,
    fontSize:17,
    paddingHorizontal:10,
    
  },
    username:{marginBottom:10},
    image:{
      width:300,
      resizeMode:'contain',
      marginBottom: 20,
    },
    bt:{
       width: 100,
       height: 40,
      borderRadius:7,
      backgroundColor:'#ff0000',
      marginTop:40,
      justifyContent:'center',
      alignItems:'center'
    },
    tlg:{
        color:'#ffffff',
        fontSize:17,
        fontWeight:'bold',

    }
});

export default Login;