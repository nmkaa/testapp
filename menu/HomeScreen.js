import React from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Text, 
  KeyboardAvoidingView, 
  Picker, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Нэмэх",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: 'center', flex: 1 }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      records: []
    }
  }

     dataAdd = () =>{
       const {name} = this.state.name;
       const {price} = this.state.price;
       const {description} = this.state.description;
       const {category_id} = this.state.category_id;
       const {created} = this.state.created;

       fetch('http://172.16.0.205/api/product/create.php', {
         method: 'POST',
         header: {
           'Accept': 'application/json',
           'Connect-type': 'application/json' 
         },
         body:JSON.stringify({
          name: name,
          price: price,
          description: description,
          category_id: category_id,
          created: created,
         }) 
       })
       .then((response) => response.json())
          .then((responseJson) => {
            alert(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
     }
  
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} enabled>
          <View sryle={styles.row}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.textinput} underlineColorAndroid="blue" />
          </View>
          <View sryle={styles.row}>
            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.textinput} underlineColorAndroid="blue" />
          </View>
          <View sryle={styles.row}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.textinput} underlineColorAndroid="blue" />
          </View>
          <View sryle={styles.row}>
            <Text style={styles.label}>Categoty</Text>
            <Picker
              style={{ height: 50, }}
            >
              {
                this.state.dataPicker.map((item, index) => (
                  <Picker.Item key={index} label={item} value={item.toLowerCase()} />
                ))
              }
            </Picker>
          </View>
          <View sryle={styles.row}>
            <Text style={styles.label}>Created</Text>
            <DatePicker
              style={{ width: "100%" }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2019-09-01"
              maxDate="2019-09-12"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: 0,
                  top: 4,
                  marginLeft: 0
                },
              }}
              onDateChange={(date) => { 
                this.setState({ date: date }) 
              }}
            />
          </View>

          <View sryle={styles.row}>
            <TouchableOpacity style={styles.btnContainer} onPress={this._add} >
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  _add = () => {
    alert(JSON.stringify(this.state.dataAdd));
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, },
  row: { marginBottom: 20, },
  label: { fontSize: 20, },
  textinput: { height: 40, borderWidth: 0, },
  btnContainer: { backgroundColor: 'blue', padding: 10, alignItems: 'center', marginTop: 10, },
  add: { fontSize: 20, color: 'white' },
});