import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';

import {
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
 
import Screen1 from './menu/screen1';
import Information from './menu/information';
import Screen3 from './menu/screen3';

import SideMenu from './sidemenu';
 
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={{uri: 'https://img.icons8.com/material-two-tone/24/000000/menu.png'}}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const FirstActivity_StackNavigator = createSwitchNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createSwitchNavigator({
  Second: {
    screen: Information,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Screen3_StackNavigator = createSwitchNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Menu = createDrawerNavigator({
  Screen1: {screen: FirstActivity_StackNavigator},
  Screen2: {screen: Screen2_StackNavigator},
  Screen3: {screen: Screen3_StackNavigator},
},
{
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width - 120,
  initialRouteName: 'Screen1',
});
 
export default createAppContainer(Menu);