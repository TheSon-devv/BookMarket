import React, {Component}from 'react';
import {StyleSheet,View,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class HeaderHome extends Component{
    render(){
        return(
        <View >
            <View style={{backgroundColor : '#0BC99A'}}>
                <Text style={styles.nameApp}>BookMarket</Text>
            </View>
            <View style={styles.headerContainer}>
                
                 <View style={styles.inputContainer}>
                    <TextInput  
                        placeholder="Bạn tìm gì hôm nay"
                        autoCapitalize="none"
                        style = {styles.inputText}
                    />
                    
                </View>
                
                <View style={styles.cartContainer}>
                    <TouchableOpacity>
                        <FontAwesome name="shopping-cart" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flexDirection : 'row',
        backgroundColor : '#0BC99A',
        paddingVertical : 5
    },
    nameApp : {
        textAlign : 'center',
        fontWeight : '100',
        color : '#fff',
        fontSize : 20,
        marginVertical : 5,

    },
    inputContainer : {
       flex : 1,
       marginBottom : 10
    },
    inputText : {
        marginLeft : 10,
        color : 'gray',
        fontWeight : '500',
        height : 40,
        backgroundColor : '#fff',
        borderRadius : 15,
        paddingLeft : 10
    },
    cartContainer : {
        justifyContent : 'center',
        paddingHorizontal : 10
    }
})