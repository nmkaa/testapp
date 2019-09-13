import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Profile from './Profile.js'

const user = {username: 'admin', password: '123'}

class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      username: '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/64/000000/email.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Username"              
              underlineColorAndroid='transparent'
              autoCapitalize="none"
              onChangeText={(username) => this.setState({ username: username })}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}              
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight 
          style={[styles.buttonContainer, styles.loginButton]} 
          onPress={ () => this._login() }
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
  _login(){
    // console.log(this.state)    
    if(user.username === this.state.username && user.password === this.state.password){
      this.props.navigation.navigate('Profile');
    }else{
      alert('Username and password incorrect');
    }
  }
}

const AppNavigator = createSwitchNavigator({
  Home: { screen: LoginView },
  Profile: { screen: Profile }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default createAppContainer(AppNavigator);
