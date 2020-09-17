import React, {Component}from 'react';
import {StyleSheet,View,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class HeaderHome extends Component{
    render(){
        return(
        <View style={styles.headerContainer}>
            <View style={{flex:1,marginLeft:10}}>
                <TouchableOpacity>
                    <FontAwesome name="bars" size={30} color="#555555"/>
                </TouchableOpacity>
            </View>
            <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'600'}}>BookMarket</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('Infomation')}>
                    <FontAwesome name="book" size={30} color="#555555"/>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flexDirection : 'row',
        backgroundColor : '#0BC99A',
        paddingVertical : 15,
    },
})