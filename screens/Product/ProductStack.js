import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './Product';
import ProductDetail from './ProductDetail';


const StackProduct = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})


export default class ProductStack extends Component{
    render(){
        return(
            <StackProduct.Navigator initialRouteName="Product">
                <StackProduct.Screen name="Product" component={Product} options={navOptionHandler}/>
                <StackProduct.Screen name="ProductDetail" component={ProductDetail} options={navOptionHandler}/>
            </StackProduct.Navigator>
        )
    }
}