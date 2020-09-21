import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomerDetailProduct from '../../components/HomeComponents/CustomDetailProduct';

export default class ProductDetail extends Component{
    render(){
        
        const {navigation,route}=this.props;
        const {bookParams} = route.params;

        return(
           <View style={styles.container}>
                <View>
                    <CustomerDetailProduct navigation={navigation}/>
                </View>
                <ScrollView>
                    <View >
                        <View>
                            <View style={styles.detail}>
                                <Text style={{fontWeight:'bold'}}>Mã sách : </Text>
                                <Text>{bookParams.id}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{fontWeight:'bold'}}>Tên sách : </Text>
                                <Text>{bookParams.nameBook}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{fontWeight:'bold'}}>Tác giả : </Text>
                                <Text>{bookParams.nxb}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{fontWeight:'bold'}}>Giá bán lẻ : </Text>
                                <Text>{bookParams.price}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{fontWeight:'bold'}}>Trạng thái : </Text>
                                <Text>{bookParams.tt}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{fontWeight:'bold'}}>Ngày nhập : </Text>
                                <Text>{bookParams.input}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{fontWeight:'bold'}}>Tồn : </Text>
                                <Text>{bookParams.exist}</Text>
                            </View>
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
        backgroundColor:'#fff',
    },
    detail : {
        borderBottomWidth : 1,
        padding:15,
        flexDirection:'row',
        borderBottomColor:'#FFCECE',
        justifyContent : 'space-between'
    }
})