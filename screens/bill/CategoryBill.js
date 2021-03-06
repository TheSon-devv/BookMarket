import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class CategoryBill extends Component{
    render(){
        const {bill,onPress}=this.props;
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>

                    <View style={styles.borderImage}>
                        <FontAwesome name="folder" size={30}/>
                        <Text style={{fontSize:10}}>{bill.maBill}</Text>
                    </View>
                    <View style={styles.detailCustomer}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                            <Text style={{fontSize:18,color:'green'}}>{bill.price} VND</Text>
                            <Text>{bill.time}</Text>
                        </View>
                        <Text>{bill.nameCustomer} </Text>
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
        width:55,
        height:60,
        marginVertical : 20,
        marginLeft : 20,
        alignItems:'center',
        justifyContent:'center'
    },
    detailCustomer : {
        width : '78%',
        height : 100,
        justifyContent:'center',
        paddingLeft:20
    }
})