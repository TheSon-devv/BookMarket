import React, { Component } from 'react';
import {StyleSheet, View,Image,Dimensions,Text,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';

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
                        {banners.map( (e) => (
                            <View key={e.id}>
                                <Image source={e.images} style={styles.banner}/>
                            </View>
                        ))}
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