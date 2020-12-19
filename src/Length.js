import React from 'react';
import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements';

class Length extends React.Component {
        constructor() {
                super();
                this.state={
                        mm:0,
                        cm:0,
                        m:0,
                        km:0,
                };
        }
        mm_change(unit) {
                this.state.mm = unit;
                this.state.cm = unit / 10;
                this.state.m = unit / 1000;
                this.state.km = unit / 1000000;
                this.setState({
                });
        }
        cm_change(unit) {
                this.state.mm = unit * 10;
                this.state.cm = unit;
                this.state.m = unit / 100;
                this.state.km = unit / 100000;
                this.setState({
                });
        }
        m_change(unit) {
                this.state.mm = unit * 1000;
                this.state.cm = unit * 100;
                this.state.m = unit;
                this.state.km = unit / 1000;
                this.setState({
                });
        }
        km_change(unit) {
                this.state.mm = unit * 1000000;
                this.state.cm = unit * 100000;
                this.state.m = unit * 1000;
                this.state.km = unit;
                this.setState({
                });
        }
        render() {
                let a_mm = 0;
                let a_cm = 0;
                let a_m = 0;
                let a_km = 0;
                return(
                        <View backgroundColor='#B2FF66' style={{flex:1}}>
                                <ScrollView>
                                        <View style={[new_styles.viewStyle]}>
                                                <Text style={[new_styles.textStyle]}>miliMeters(mm)</Text>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.mm)} onChangeText={(e)=>a_mm = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='green' onPress={()=>this.mm_change(a_mm)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <Text style={[new_styles.textStyle]}>CentiMeters(cm)</Text>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.cm)} onChangeText={(e)=>a_cm = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='green' onPress={()=>this.cm_change(a_cm)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <Text style={[new_styles.textStyle]}>Meters(m)</Text>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.m)} onChangeText={(e)=>a_m = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='green' onPress={()=>this.m_change(a_m)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <Text style={[new_styles.textStyle]}>KiloMeters(km)</Text>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.km)} onChangeText={(e)=>a_km = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='green' onPress={()=>{this.km_change(a_km)}}></Button>
                                        </View>
                                </ScrollView>
                        </View>
                );
        }
}


const new_styles = StyleSheet.create({
        viewStyle:{
                borderColor:'black',
                borderWidth:1,
                padding:5,
                margin:10,
                borderRadius:5,
        },
        textStyle:{
                fontSize:10,
        },
        textIn:{
                fontSize:20,
                
        },
        but:{
                
        }
})
export default Length;