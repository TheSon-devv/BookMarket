import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomBillDetail from '../../components/HomeComponents/CustomBillDetail';

export default class BillDetail extends Component{
    render(){
        
        const {navigation,route}=this.props;
        const {billParams} = route.params;

        return(
           <View style={styles.container}>
                <View>
                    <CustomBillDetail navigation={navigation}/>
                </View>
                <ScrollView>

                    <View >
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Mã hóa đơn : </Text>
                            <Text>{billParams.ma}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Tên khách hàng : </Text>
                            <Text>{billParams.nameCustomer}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Điện thoại : </Text>
                            <Text>{billParams.phone}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Sách đã mua : </Text>
                            <Text>{billParams.nameBook}</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#CCCCCC',paddingVertical:10,paddingLeft:15}} >
                        <Text style={{fontSize:14,marginBottom:5,fontWeight:'bold'}}>Thanh toán</Text>
                    </View>
                    <View >
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Tổng hóa đơn : </Text>
                            <Text>{billParams.bill}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Tổng số tiền : </Text>
                            <Text>{billParams.price}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Ngày mua : </Text>
                            <Text>{billParams.date}</Text>
                        </View>
                    </View>
                </ScrollView>
                
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'#fff'
    },
    detail : {
        borderBottomWidth : 1,
        padding:15,
        flexDirection:'row',
        borderBottomColor:'#FFCECE',
        justifyContent : 'space-between'
    }
})