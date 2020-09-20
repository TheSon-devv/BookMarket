import 'react-native-gesture-handler';
import React,{Component}from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import SignOut from './SignOut';
import HomeStack from './HomeScreens/HomeStack';
import CustomDrawerContent from './CustomDrawerContent';
import Customer from './Customer/Customer';
import Product from './Product/Product';
import Bill from './Bill/Bill';
import CustomerStack from './Customer/CustomerStack';
import ProductStack from './Product/ProductStack';

const Drawer = createDrawerNavigator();


export default class DrawerNavigator extends Component{

    render(){
        const {navigation} = this.props;
        return(
                <Drawer.Navigator 
                    initialRouteName="HomeStack"
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
                        name="CustomerStack"
                        component={CustomerStack}
                    />
                    <Drawer.Screen
                        name="ProductStack"
                        component={ProductStack}
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
}
