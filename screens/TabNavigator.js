import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreens/HomeScreen';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SignOut from './SignOut';
import HomeStack from './HomeScreens/HomeStack';

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

const TabNavigator = () => {
    return(
            <Tab.Navigator
                tabBarOptions = {
                    {
                        activeTintColor: '#62B7DF',
                        inactiveTintColor: '#958C8C'
                    }
                }
                initialRouteName="HomeScreen"
            >
                <Tab.Screen
                    name="HomeScreen"
                    component={HomeStack}
                    options={{
                        tabBarLabel : 'Trang chủ',
                        tabBarIcon : ({color}) => (
                            <MaterialIcons name="home" color={color} size={30}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarLabel : 'Tìm kiếm',
                        tabBarIcon : ({color}) => (
                            <MaterialIcons name="search" color={color} size={30}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        tabBarLabel : 'Liên hệ',
                        tabBarIcon : ({color}) => (
                            <MaterialIcons name="location-on" color={color} size={30}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="SignOut"
                    component={SignOut}
                    options={{
                        tabBarLabel : 'SignOut',
                        tabBarIcon : ({color}) => (
                            <MaterialIcons name="search" color={color} size={30}/>
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default TabNavigator;