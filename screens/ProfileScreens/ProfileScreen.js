
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileListItem from './ProfileListItem';
import Loading from './Loading';
import Login from './Login';
import SignUp from './SignUp';
import Infomation from './Infomation';

const ProfileStack = createStackNavigator();

export default class ProfileScreen extends Component{
   
    render(){
        
        return(
        <ProfileStack.Navigator initialRouteName="Loading">
            <ProfileStack.Screen name="Loading" component={Loading}/>
            <ProfileStack.Screen name="Login" component={Login} options={{title:'Đăng nhập'}}/>
            <ProfileStack.Screen name="SignUp" component={SignUp} options={{title:'Đăng ký'}}/>
            <ProfileStack.Screen name="ProfileListItem" component={ProfileListItem} options={ {title:'Cá Nhân'}}/>
            <ProfileStack.Screen name="Infomation" component={Infomation} options={ {title:'Thông tin ứng dụng'}}/>
        </ProfileStack.Navigator>
    )
    }

}

