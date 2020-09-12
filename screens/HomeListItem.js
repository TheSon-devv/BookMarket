import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderHome from '../components/HeaderHome';
import HomeSection1 from '../components/HomeSection1';


export default class HomeListItem extends Component{
    render(){
        return (
            <View style={styles.container}>
                <HeaderHome />
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('ListBook')}>
                    <HomeSection1 />
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: '#E3ECF5'
  }
});


