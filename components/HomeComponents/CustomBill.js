import React, {Component}from 'react';
import {StyleSheet,View,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class CustomerBill extends Component{
    render(){
        return(
        <View style={styles.headerContainer}>
            <View style={{flex:1,marginLeft:10}}>
                <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                    <FontAwesome name="bars" size={30} color="#fff"/>
                </TouchableOpacity>
            </View>
            <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'600'}}>Hóa đơn</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>

            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flexDirection : 'row',
        backgroundColor : '#F42B2B',
        paddingVertical : 15,
        marginBottom : 10
    },
})