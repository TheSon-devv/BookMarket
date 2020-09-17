import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Detail from './Detail';
import { Component } from 'react';



const StackHome = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

export default class HomeStack extends Component {
    render(){
        return(
            <StackHome.Navigator initialRouteName="Home">
                <StackHome.Screen name="HomeScreennn" component={HomeScreen} options={navOptionHandler}/>
                <StackHome.Screen name="Detail" component={Detail} options={navOptionHandler}/>
            </StackHome.Navigator>
        )
    }
};
