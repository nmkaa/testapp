import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
 
export default class Information extends Component {

  static navigationOptions = ({ navigation }) => {
  return {
    title: "Мэдээ, мэдээлэл",
    headerStyle: {backgroundColor: "#fff"},
    headerTitleStyle: {textAlign: "center",flex: 1}
    };
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Мэдээ, мэдээлэл </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});