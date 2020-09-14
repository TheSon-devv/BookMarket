import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreens/HomeScreen';
import Cart from './screens/Cart/Cart';
import ProfileScreen from './screens/ProfileScreens/ProfileScreen';
import Contact from './screens/Contact/Contact';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            tabBarOptions = {
                {
                    activeTintColor: '#62B7DF',
                    inactiveTintColor: '#958C8C'
                }
            }
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
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
                    tabBarLabel : 'Giỏ hàng',
                    tabBarIcon : ({color}) => (
                        <MaterialIcons name="shopping-cart" color={color} size={30}/>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel : 'Cá nhân',
                    tabBarIcon : ({color}) => (
                        <MaterialIcons name="person" color={color} size={30}/>
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
        </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   justifyContent: 'center',
   alignItems:'center'
  }
});

export default App;
