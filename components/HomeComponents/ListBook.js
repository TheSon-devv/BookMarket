import React, { Component } from 'react';
import {StyleSheet, View,Image,Dimensions,Text,ScrollView,TouchableOpacity} from 'react-native';

export default class ListBook extends Component{

    
    render(){
        const {books} = this.props;
        return(
        <ScrollView>
            
            <View style={styles.container}>
                <View style={styles.body}>
                {books.map( (e) => (
                    <View style={styles.itemContainer} key={e.id}>
                            <TouchableOpacity >
                                <Image source={e.images} style={styles.itemImage}/>
                            </TouchableOpacity>
                            <Text style={styles.itemName} numberOfLines={1}>{e.name.toUpperCase()}</Text>
                            <View style={styles.addCart}>
                                <Text style={styles.itemPrice}>{e.price}</Text>
                                <TouchableOpacity>
                                    <Text style={{color:"red"}}>Mua +</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                ))}
                    
                </View>
            </View>

        </ScrollView>
        )
    }
}

const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');
const itemWidth = ( width - 100 ) / 2;
const itemImageHeight = (itemWidth / 200) * 292;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        margin : 15,
    },
    body : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        flexWrap : 'wrap',
    },
    itemContainer : {
        width : itemWidth,
        paddingVertical: 10,

    },
    itemImage : {
        width : itemWidth,
        height : itemImageHeight
    },
    itemName : {
        fontSize : 16,
        padding : 5,
        color : '#D58D8D'
    },  
    itemPrice : {
        fontSize : 14,
        paddingLeft : 5,
        color : 'blue'
    },
    addCart : {
        justifyContent : 'space-between',
        flexDirection : 'row'
    }
})