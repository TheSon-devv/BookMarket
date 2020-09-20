import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Dimensions} from 'react-native';

export default class CategoryProduct extends Component{
    render(){
        const {book,onPress}=this.props;
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container} key={book.id}>
                    <View style={styles.borderImage}>
                        <Image source={book.images} style={styles.image}/>
                    </View>
                    <View style={styles.detailCustomer}>
                        <View style={{marginBottom:50}}>
                            <Text style={{fontSize : 16}} numberOfLines={1}>{book.nameBook}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>Giá vốn : 0</Text>
                            <Text>Tồn : {book.exist}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>Giá bán : {book.price}</Text>
                            <Text>Có thể bán : {book.sale}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');
const itemWidth = ( width - 200 ) / 2;
const itemImageHeight = (itemWidth / 200) * 292;


const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderBottomWidth: 0.5,
        borderBottomColor:'#CD9999',
        height : 170
    },
    borderImage : {
        width:'20%',
        alignItems:'center',
        justifyContent : 'center',
        marginLeft : 20
    },
    detailCustomer : {
        width : '68%',
        height : 170,
        marginLeft : 20,
        justifyContent:'center'
    },
    image : {
        width : itemWidth,
        height : itemImageHeight,
    }
})