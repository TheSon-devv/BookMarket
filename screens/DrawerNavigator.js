import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import SignOut from './SignOut';
import HomeStack from './HomeScreens/HomeStack';
import CustomDrawerContent from './CustomDrawerContent';
import Customer from './Customer/Customer';
import Product from './Product/Product';
import Bill from './bill/bill';

const Drawer = createDrawerNavigator();


function DrawerNavigator({navigation}){
    return(
            <Drawer.Navigator 
            initialRouteName="HomeScreen"
            drawerContent={ () => <CustomDrawerContent navigation={navigation}/>}
            >
                <Drawer.Screen
                    name="HomeStack"
                    component={HomeStack}
                />
                <Drawer.Screen
                    name="Cart"
                    component={Cart}
                />
                <Drawer.Screen
                    name="Customer"
                    component={Customer}
                />
                <Drawer.Screen
                    name="Product"
                    component={Product}
                />
                <Drawer.Screen
                    name="Bill"
                    component={Bill}
                />
                <Drawer.Screen
                    name="Contact"
                    component={Contact}
                />
                <Drawer.Screen
                    name="SignOut"
                    component={SignOut}
                />
            </Drawer.Navigator>
    )
}

export default DrawerNavigator;