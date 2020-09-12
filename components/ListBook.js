import React, { Component } from 'react';
import {StyleSheet, View,Image,Dimensions,Text,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import sach1 from '../Image/sach1.png';


export default class ListBook extends Component{

    render(){

        return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.itemContainer}>
                        <Image source={sach1} style={styles.itemImage}/>
                        <Text style={styles.itemName}>Ten san pham</Text>
                            <View style={styles.addCart}>
                                <Text style={styles.itemPrice}>12.000 VND</Text>
                                <TouchableOpacity>
                                    <Text style={{color:"red"}}>Mua +</Text>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.itemContainer}>
                        <Image source={sach1} style={styles.itemImage}/>
                        <Text style={styles.itemName}>Ten san pham</Text>
                            <View style={styles.addCart}>
                                <Text style={styles.itemPrice}>12.000 VND</Text>
                                <TouchableOpacity>
                                    <Text style={{color:"red"}}>Mua +</Text>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.itemContainer}>
                        <Image source={sach1} style={styles.itemImage}/>
                        <Text style={styles.itemName}>Ten san pham</Text>
                            <View style={styles.addCart}>
                                <Text style={styles.itemPrice}>12.000 VND</Text>
                                <TouchableOpacity>
                                    <Text style={{color:"red"}}>Mua +</Text>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.itemContainer}>
                        <Image source={sach1} style={styles.itemImage}/>
                        <Text style={styles.itemName}>Ten san pham</Text>
                            <View style={styles.addCart}>
                                <Text style={styles.itemPrice}>12.000 VND</Text>
                                <TouchableOpacity>
                                    <Text style={{color:"red"}}>Mua +</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        )
    }
}

const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');
const itemWidth = ( width - 50 ) / 2;
const itemImageHeight = (itemWidth / 200) * 292;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        margin : 10
    },
    body : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        flexWrap : 'wrap',
    },
    itemContainer : {
        width : itemWidth,
        paddingVertical: 10
    },
    itemImage : {
        width : itemWidth,
        height : itemImageHeight
    },
    itemName : {
        fontSize : 16,
        padding : 5
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
