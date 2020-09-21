import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Bill from './Bill';
import BillDetail from './BillDetail';


const StackCustomer = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})


export default class CustomerStack extends Component{
    render(){
        return(
            <StackCustomer.Navigator initialRouteName="Bill">
                <StackCustomer.Screen name="Bill" component={Bill} options={navOptionHandler}/>
                <StackCustomer.Screen name="BillDetail" component={BillDetail} options={navOptionHandler}/>
            </StackCustomer.Navigator>
        )
    }
}