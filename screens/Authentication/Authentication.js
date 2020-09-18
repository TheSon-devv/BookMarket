
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from './Loading';
import Login from './Login';
import SignUp from './SignUp';
import DrawerNavigator from '../DrawerNavigator';


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
            <AuthenticationStack.Screen name="Drawer" component={DrawerNavigator} options={navOptionHandler}/>
        </AuthenticationStack.Navigator>
    )
    }

}

