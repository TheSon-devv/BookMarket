import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import HeaderHome from '../components/HeaderHome';
import HomeSection from '../components/HomeSection1';
import {createStackNavigator} from '@react-navigation/stack';
import HomeListItem from './HomeListItem';
import ListBook from '../components/ListBook';

const HomeStack = createStackNavigator();

export default class HomeScreen extends Component{
    render(){
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeListItem} />
                <HomeStack.Screen name="ListBook" component={ListBook} />
            </HomeStack.Navigator>
        );
    }
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: '#E3ECF5'
  }
});


