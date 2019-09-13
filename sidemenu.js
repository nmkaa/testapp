import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, } from 'react-native';

class SideMenu extends Component {
  constructor() {
    super();
    this.options = [
      {
        mainHeading: 'Menu',
        subOptions: [
          { secondaryHeading: 'Нүүр', navigationPath: 'First' },
        ],
      },
      {
        mainHeading: 'Settings',
        subOptions: [
          { secondaryHeading: 'Мэдээ мэдээлэл', navigationPath: 'Second' },
          { secondaryHeading: 'Screen3', navigationPath: 'Third' },
        ],
      },
    ];
  }
 
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>header</Text>
        </View>
        <ScrollView>
          <View>
            {this.options.map((option, key) => (
              <View key={key}>
                <Text style={styles.mainHeading}>{option.mainHeading}</Text>
                {option.subOptions.map((item, key) => (
                  <View style={styles.secondaryHeading} key={key}>
                    <Text onPress={this.navigateToScreen(item.navigationPath)}>
                      {item.secondaryHeading}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>2019</Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
  },
  secondaryHeading: {
    padding: 10,
  },
  mainHeading: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'lightgrey',
  },
  footerContainer: {
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  headerContainer: {
    backgroundColor: 'silver',
    padding: 10,    
  },
  headerText: {
    textAlign: 'center',
  },
});
 
export default SideMenu;