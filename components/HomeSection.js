import React, { Component } from 'react';
import {StyleSheet, View, Text, Image,Dimensions , ScrollView,FlatList} from 'react-native';
import section_banner from '../assets/section_banner.png';
import SectionListItem from './SectionListItem';
import Swiper from 'react-native-swiper';

const{ height} = Dimensions.get('window');

export default class HomeSectionComponent extends Component{

    constructor(props){
        super(props);
        this.state= {
            data : [],
            Loading : true
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then( (response) => response.json())
        .then( (json) => {
            this.setState( {data: json.book});
        })
        .catch( (error) => console.error(error))
        .finally(() => {
            this.setState( {Loading : false});
        })
    }
    render(){
        const {data,Loading} = this.state;
        
        return(
        
            <View style = {styles.wrapper}>
                <Swiper >
                    <Image source={section_banner} style={styles.banner}/>
                    <Image source={section_banner} style={styles.banner}/>
                    <Image source={section_banner} style={styles.banner}/>
                </Swiper>
            </View>
        
        )
    }
}
const styles = StyleSheet.create({
    wrapper : {
       height : height * 0.3,
       backgroundColor : '#FFF',
       margin : 10
    },
    
})
