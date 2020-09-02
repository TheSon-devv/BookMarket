import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            tabBarOptions = {
                {
                    activeTintColor: '#157cdb',
                    inactiveTintColor: '#262626'
                }
            }
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel : 'Trang chủ',
                    tabBarIcon : ({color}) => (
                        <MaterialIcons name="home" color={color} size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarLabel : 'Thông báo',
                    tabBarIcon : ({color}) => (
                        <MaterialIcons name="notifications" color={color} size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel : 'Cá nhân',
                    tabBarIcon : ({color}) => (
                        <MaterialIcons name="person" color={color} size={24}/>
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
