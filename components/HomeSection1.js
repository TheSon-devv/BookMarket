import React, { Component } from 'react';
import {StyleSheet, View,Image,Dimensions,Text,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import banner_4 from '../Image/banner_4.png';
import banner_2 from '../Image/banner_2.png';
import banner_6 from '../Image/banner_6.png';

const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');

export default class HomeSection1 extends Component{

    
    render(){
        
        return(
        <ScrollView>
            <View style = {styles.wrapper}>
                <View style={{margin:5}}>
                    <Text style={styles.textBanner}>SÁCH MỚI THÁNG 9</Text>
                </View>
                <View style = {{flex : 4}}>
                    <Swiper>
                        <Image source={banner_6} style={styles.banner}/>
                        <Image source={banner_2} style={styles.banner}/>
                        <Image source={banner_4} style={styles.banner}/>
                    </Swiper>
                </View>
            </View>
        
        </ScrollView>
        )
    }
}
const imgWidth = width - 30;
const imgHeight = imgWidth / 2;

const styles = StyleSheet.create({
    wrapper : {
       height : height * 0.35,
       backgroundColor : '#FFF',
       margin : 10,

    },
    banner : {
        width : imgWidth ,
        height : imgHeight, 
        marginHorizontal : 5
    },
    textBanner : {
        fontSize : 20,
        color : '#AFAEFA',
        
    }
})
