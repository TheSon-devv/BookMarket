import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import HeaderHome from '../../components/HomeComponents/HeaderHome';
import HomeSection1 from '../../components/HomeComponents/HomeSection1';
import {createStackNavigator} from '@react-navigation/stack';
import ListBook from '../../components/HomeComponents/ListBook';

const HomeStack = createStackNavigator();

export default class HomeScreen extends Component{
    render(){
        return (
            <ScrollView style={styles.container}>
                <HeaderHome />
                <HomeSection1 />
                <HomeSection1 />
                <ListBook />
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: '#E3ECF5'
  }
});


