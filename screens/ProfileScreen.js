
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileListItem from './ProfileListItem';
import Loading from './Loading';
import Login from './Login';
import SignUp from './SignUp';


const ProfileStack = createStackNavigator();

const ProfileScreen = () => {

    return(
        <ProfileStack.Navigator initialRouteName="Login">
            <ProfileStack.Screen name="Loading" component={Loading}/>
            <ProfileStack.Screen name="Login" component={Login} options={{title:'Đăng nhập'}}/>
            <ProfileStack.Screen name="SignUp" component={SignUp} options={{title:'Đăng ký'}}/>
            <ProfileStack.Screen name="ProfileListItem" component={ProfileListItem} options={ {title:'Cá Nhân'}}/>
        </ProfileStack.Navigator>
    )

}

export default ProfileScreen;