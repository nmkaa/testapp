import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Information from './information'
import Screen3 from './screen3'
import HomeScreen from './HomeScreen'

class Screen1 extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Нүүр хуудас",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: 'center', flex: 1 }
    };
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.homeBn} onPress={() => this.props.navigation.navigate('Information')} > 
            <Image style={{width: 50, height: 50}} 
              source={{uri: 'https://img.icons8.com/wired/64/000000/information.png'}} />
            <Text style={styles.text}> Мэдээ, мэдээлэл </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeBn2} onPress={() => this.props.navigation.navigate('Screen3')}>
            <Image style={{width: 50, height: 50}} 
              source={{uri: 'https://img.icons8.com/dotty/64/000000/note.png'}} />
            <Text style={styles.text}> Судалгаа </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeBn3}>
            <Image style={{width: 50, height: 50}} 
              source={{uri: 'https://img.icons8.com/carbon-copy/80/000000/worldwide-location.png'}} />
            <Text style={styles.text}> Холбоо барих </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={styles.homeBn} onPress={() => this.props.navigation.navigate('Add')} > 
            <Image style={{width: 50, height: 50}} 
              source={{uri: 'https://img.icons8.com/ios/50/000000/help.png'}} />
            <Text style={styles.text}> Заавар </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeBn2} onPress={() => this.props.navigation.navigate('HomeScreen')} >
            <Image style={{width: 50, height: 50}} 
              source={{uri: 'https://img.icons8.com/cotton/64/000000/topic-push-notification.png'}} />
            <Text style={styles.text}> Мэдэгдэл </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}
const AppNavigator = createStackNavigator({
  Home: { screen: Screen1 },
  Information: { screen: Information },
  Screen3: { screen: Screen3 },
  HomeScreen: { screen: HomeScreen },
});

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  container1:{
    paddingTop: 20,
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
  },
  container2:{
    paddingTop: 20,
    marginTop: 20,
    marginLeft: 90,
    flexDirection: 'row',
  },
  homeBn: {
    width: 100,
    height: 120,
    backgroundColor: 'aliceblue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBn2: {
    width: 100,
    height: 120,
    backgroundColor: 'aliceblue',
    borderRadius: 20,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBn3: {
    width: 100,
    height: 120,
    backgroundColor: 'aliceblue',
    borderRadius: 20,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator);