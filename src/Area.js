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

class Area extends React.Component {
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
                this.state.cm = unit / 100;
                this.state.m = unit / 1000000;
                this.state.km = unit / 1000000000000;
                this.setState({
                });
        }
        cm_change(unit) {
                this.state.mm = unit * 100;
                this.state.cm = unit;
                this.state.m = unit / 10000;
                this.state.km = unit / 10000000000;
                this.setState({
                });
        }
        m_change(unit) {
                this.state.mm = unit * 1000000;
                this.state.cm = unit * 10000;
                this.state.m = unit;
                this.state.km = unit / 1000000;
                this.setState({
                });
        }
        km_change(unit) {
                this.state.mm = unit * 1000000000000;
                this.state.cm = unit * 10000000000;
                this.state.m = unit * 1000000;
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
                        <View backgroundColor='#CCCCFF' style={{flex:1}}>
                                <ScrollView>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>miliMeter(mm</Text><Text style={{fontSize:8, lineHeight:10}}>2</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.mm)} onChangeText={(e)=>a_mm = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#6666FF' onPress={()=>this.mm_change(a_mm)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>centiMeter(cm</Text><Text style={{fontSize:8, lineHeight:10}}>2</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.cm)} onChangeText={(e)=>a_cm = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#6666FF' onPress={()=>this.cm_change(a_cm)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>Meter(m</Text><Text style={{fontSize:8, lineHeight:10}}>2</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.m)} onChangeText={(e)=>a_m = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#6666FF' onPress={()=>this.m_change(a_m)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>kiloMeter(km</Text><Text style={{fontSize:8, lineHeight:10}}>2</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.km)} onChangeText={(e)=>a_km = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#6666FF' onPress={()=>{this.km_change(a_km)}}></Button>
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

export default Area;