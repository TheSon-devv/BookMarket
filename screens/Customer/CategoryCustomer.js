import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default class CategoryCustomer extends Component{
    render(){
        const {customer,onPress}=this.props;
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <View style={styles.borderImage}>
                        <Text style={{marginTop:7,color:'#fff',fontSize : 30}}>{customer.acronymName}</Text>
                    </View>
                    <View style={styles.detailCustomer}>
                        <Text>{customer.nameCustomer}</Text>
                        <Text>Điện thoại : {customer.phone}</Text>
                        <Text style={{color:'#F27575'}}>{customer.sile}</Text>
                        <Text style={{color:'#F27575'}}>Đã tiêu : {customer.used}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderBottomWidth: 0.5,
        borderBottomColor:'#CD9999',
    },
    borderImage : {
        width:60,
        height:60,
        borderWidth:1,
        marginVertical : 20,
        marginLeft : 20,
        borderRadius : 50,
        backgroundColor : 'green',
        alignItems:'center'
    },
    detailCustomer : {
        width : '100%',
        height : 100,
        paddingLeft : 20,
        justifyContent:'center'
    }
})