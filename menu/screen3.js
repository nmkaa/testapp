import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './HomeScreen'

const Item = ({ name, id, description, price, category_id, category_name }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Text>Add new</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity>
          <Text style={styles.title}>{id}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.title}>{price}</Text>
          <Text style={styles.title}>{category_id}</Text>
          <Text style={styles.title}>{category_name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
class Screen3 extends Component {
  static navigationOptions =
  {
     title: 'Product show list',
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      records: []
    }
  }

  componentDidMount() {
    this.dataRead()
  }

  dataRead = () => {
    return fetch('http://172.16.0.205/api/product/read.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        loading: false,
        records: responseJson.records
      })
      // var ds = new FlatList.records({rowHasChanged: (r1, r2) => r1 != r2});
      // this.setState({
      //   isLoading: false,
      //   records: ds.cloneWithRows(responseJson.records),
      // }, function(){

      // });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  // ListViewItemSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: .5,
  //         width: "100%",
  //         backgroundColor: "#000",
  //       }}
  //     />
  //   );
  // }

  render() 
  {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <FlatList
          data={this.state.records}
          renderItem={({ item }) => <Item  id={item.id} 
                                                name={item.name} 
                                                description={item.description} 
                                                price={item.price}
                                                category_id={item.category_id}
                                                category_name={item.category_name} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const AppNavigator = createSwitchNavigator({
  Home: { screen: Screen3 },
  Add: { screen: HomeScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default createAppContainer(AppNavigator);