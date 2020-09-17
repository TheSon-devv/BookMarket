import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Detail from './Detail';
import { Component } from 'react';
import Cart from '../Cart/Cart';
import Infomation from './Infomation';


const StackHome = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

export default class HomeStack extends Component {
    render(){
        return(
            <StackHome.Navigator initialRouteName="HomeScreen">
                <StackHome.Screen name="HomeScreen" component={HomeScreen} options={navOptionHandler}/>
                <StackHome.Screen name="Detail" component={Detail} options={navOptionHandler}/>
                <StackHome.Screen name="Cart" component={Cart} />
                <StackHome.Screen name="Infomation" component={Infomation} options={{title:'Thông tin ứng dụng'}}/>
            </StackHome.Navigator>
        )
    }
};
