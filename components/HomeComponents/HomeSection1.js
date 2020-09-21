import React, { Component } from 'react';
import {StyleSheet, View,Image,Dimensions,Text,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import banner_1 from '../../Image/banner_1.png';
import banner_2 from '../../Image/banner_2.png';
import banner_3 from '../../Image/banner_3.png';
import banner_4 from '../../Image/banner_4.png';
import banner_5 from '../../Image/banner_5.png';
import banner_6 from '../../Image/banner_6.png';

const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');

export default class HomeSection1 extends Component{


    render(){
        const {banners} = this.props;
        return(
        <ScrollView>
            <View style = {styles.wrapper}>
                <View style = {{flex : 4}}>
                    <Swiper>
                        <Image source={banner_6} style={styles.banner}/>
                        <Image source={banner_2} style={styles.banner}/>
                        <Image source={banner_3} style={styles.banner}/>
                        <Image source={banner_1} style={styles.banner}/>
                        <Image source={banner_5} style={styles.banner}/>
                        <Image source={banner_4} style={styles.banner}/>
                    </Swiper>
                </View>
            </View>
        
        </ScrollView>
        )
    }
}
const imgWidth = width - 10;
const imgHeight = imgWidth / 2;

const styles = StyleSheet.create({
    wrapper : {
        height : height * 0.3,
        margin : 5,
    },
    banner : {
        width : imgWidth ,
        height : imgHeight, 
    },
})