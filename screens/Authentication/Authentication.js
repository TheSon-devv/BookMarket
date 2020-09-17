
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../TabNavigator';
import Loading from './Loading';
import Login from './Login';
import SignUp from './SignUp';


const AuthenticationStack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

export default class Authentication extends Component{
   
    render(){
        
        return(
        <AuthenticationStack.Navigator initialRouteName="Loading">
            <AuthenticationStack.Screen name="Loading" component={Loading} options={navOptionHandler}/>
            <AuthenticationStack.Screen name="Login" component={Login} options={navOptionHandler}/>
            <AuthenticationStack.Screen name="SignUp" component={SignUp} options={navOptionHandler}/>
            <AuthenticationStack.Screen name="Tab" component={TabNavigator} options={navOptionHandler}/>
        </AuthenticationStack.Navigator>
    )
    }

}

