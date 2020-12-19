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


class Volume extends React.Component {
        constructor() {
                super();
                this.state={
                        mm:0,
                        cm:0,
                        m:0,
                        km:0,
                        lit:0,
                };
        }
        mm_change(unit) {
                this.state.mm = unit;
                this.state.cm = unit / 10000;
                this.state.m = unit / 1000000000000;
                this.state.km = unit / 1000000000000000000000000;
                this.state.lit = this.state.m * 1000;
                this.setState({
                });
        }
        cm_change(unit) {
                this.state.mm = unit * 10000;
                this.state.cm = unit;
                this.state.m = unit / 100000000;
                this.state.km = unit / 100000000000000000000;
                this.state.lit = this.state.m * 1000;
                this.setState({
                });
        }
        m_change(unit) {
                this.state.mm = unit * 1000000000000;
                this.state.cm = unit * 100000000;
                this.state.m = unit;
                this.state.km = unit / 1000000000000;
                this.state.lit = this.state.m * 1000;
                this.setState({
                });
        }
        km_change(unit) {
                this.state.mm = unit * 1000000000000000000000000;
                this.state.cm = unit * 100000000000000000000;
                this.state.m = unit * 1000000000000;
                this.state.km = unit;
                this.state.lit = this.state.m * 1000;
                this.setState({
                });
        }
        lit_change(unit) {
                this.state.m = unit / 1000;
                this.state.mm = this.state.m * 1000000000000;
                this.state.cm = this.state.m * 100000000;
                this.state.km = this.state.m / 1000000000000;
                this.state.lit = unit;
                this.setState({

                });
        }
        render() {
                let a_mm = 0;
                let a_cm = 0;
                let a_m = 0;
                let a_km = 0;
                let a_lit = 0;
                return(
                        <View backgroundColor='#FFCC99' style={{flex:1}}>
                                <ScrollView>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>miliMeter(mm</Text><Text style={{fontSize:8, lineHeight:10}}>3</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.mm)} onChangeText={(e)=>a_mm = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#FF9933' onPress={()=>this.mm_change(a_mm)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>centiMeter(cm</Text><Text style={{fontSize:8, lineHeight:10}}>3</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.cm)} onChangeText={(e)=>a_cm = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#FF9933' onPress={()=>this.cm_change(a_cm)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>Meter(m</Text><Text style={{fontSize:8, lineHeight:10}}>3</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.m)} onChangeText={(e)=>a_m = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#FF9933' onPress={()=>this.m_change(a_m)}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <View style={{flexDirection:'row'}}>
                                                        <Text style={[new_styles.textStyle]}>kiloMeter(km</Text><Text style={{fontSize:8, lineHeight:10}}>3</Text><Text style={[new_styles.textStyle]}>)</Text>
                                                </View>
                                                <TextInput style={[new_styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.km)} onChangeText={(e)=>a_km = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#FF9933' onPress={()=>{this.km_change(a_km)}}></Button>
                                        </View>
                                        <View style={[new_styles.viewStyle]}>
                                                <Text style={[new_styles.textStyle]}>Liter</Text>
                                                <TextInput style={[new_styles.textIn]} keyboardType='numeric' defaultValue={String(this.state.lit)} onChangeText={(e)=>a_lit = parseFloat(e)}></TextInput>
                                                <Button title='Submit' color='#FF9933' onPress={()=>{this.lit_change(a_lit)}}></Button>
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

export default Volume;