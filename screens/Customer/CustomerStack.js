import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Customer from './Customer';
import CustomerDetail from './CustomerDetail';


const StackCustomer = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})


export default class CustomerStack extends Component{
    render(){
        return(
            <StackCustomer.Navigator initialRouteName="Customer">
                <StackCustomer.Screen name="Customer" component={Customer} options={navOptionHandler}/>
                <StackCustomer.Screen name="CustomerDetail" component={CustomerDetail} options={navOptionHandler}/>
            </StackCustomer.Navigator>
        )
    }
}