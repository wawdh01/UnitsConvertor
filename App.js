/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Card, Divider, ListItem } from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Length from './src/Length'
import Area from './src/Area'
import Volume from './src/Volume'
import Temperature from './src/Temperature'
import Pressure from './src/Pressure'
class App extends React.Component {
  render() {
    const data=[
      {title:'Length', subtitle:'Length Conversion', nav:'Length'},
      {title:'Area', subtitle:'Area Conversion', nav:'Area'},
      {title:'Volume', subtitle:'Volume Conversion', nav:'Volume'},
      {title:'Temperature', subtitle:'Temperature Conversion', nav:'Temperature'},
      {title:'Pressure', subtitle:'Pressure Conversion', nav:'Pressure'}
    ]
    return(
      <View style={[styles.viewStyle]}>
        <ScrollView>
          {
            data.map((u, i)=>{
              return(
                <View key={i}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate(u.nav)} activeOpacity={1}>
                    <ListItem title={u.title} rightIcon={<FontAwesome5 name='arrow-circle-right'></FontAwesome5>} margin={10} padding={5} subtitle={u.subtitle}/>
                  </TouchableOpacity>
                </View>
              );
            })
          }
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={[styles.textBox]}>Developed by Gaurav Wawdhane</Text>
          <Text style={[styles.textBox]}>Version:1.0</Text>
          <Text></Text>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'skyblue',
    backfaceVisibility:'hidden',
    flex:1,
  },
  textBox:{
    fontSize:15,
    textAlign:'center',
    color:'blue',
  }
});
const AppNavigator = createStackNavigator({
  Convertor:{
    screen:App,
  },
  Length:{
    screen:Length,
  },
  Area:{
    screen:Area,
  },
  Volume:{
    screen:Volume,
  },
  Temperature:{
    screen:Temperature,
  },
  Pressure:{
    screen:Pressure,
  },
});

const Appcontainer = createAppContainer(AppNavigator);
export default Appcontainer;