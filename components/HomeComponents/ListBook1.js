import React, { Component } from 'react';
import {StyleSheet, View,Image,Dimensions,Text,ScrollView,TouchableOpacity} from 'react-native';

export default class ListBook1 extends Component{

    
    render(){
        const {books,navigation} = this.props;
        return(
        <ScrollView>
            
            <View style={styles.container}>
                <View style={{marginLeft:5,marginVertical:5}}>
                    <Text style={{fontSize:18,color:'#B57171'}}>Sách Mới Nhất</Text>
                </View>
                <ScrollView horizontal={true} style={{flexDirection:'row'}} showsHorizontalScrollIndicator={false}>
                {books.map( (e,index) => (
                    <View style={styles.itemContainer} key={e.id}>
                            <TouchableOpacity 
                                onPress={ () => navigation.navigate('Detail',{
                                    bookParams : books[index]
                            })}
                            >
                                <Image source={e.images} style={styles.itemImage}/>
                            </TouchableOpacity>
                            <Text style={styles.itemName} numberOfLines={1}>{e.nameBook.toUpperCase()}</Text>
                            <Text style={styles.itemPrice}>{e.price}</Text>
                    </View>
                ))}  
                </ScrollView>
            </View>

        </ScrollView>
        )
    }
}

const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');
const itemWidth = ( width - 200 ) / 2;
const itemImageHeight = (itemWidth / 200) * 292;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        margin: 10,
        borderTopWidth: 1,
        borderTopColor : 'red'
    },
    itemContainer : {
        width : itemWidth,
        paddingVertical : 5,
        marginRight : 15
    },
    itemImage : {
        width : itemWidth,
        height : itemImageHeight
    },
    itemName : {
        fontSize : 11,
        padding : 5,
        color : '#D58D8D'
    },  
    itemPrice : {
        fontSize : 10,
        paddingLeft : 5,
        color : 'blue'
    },

})