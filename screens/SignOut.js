import React, { Component } from 'react';
import {View ,Button} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class SignOut extends Component{
    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then( () => this.props.navigation.navigate('Login'))
    }
    render(){
        return(
            <View>
                <Button 
                    title="Đăng xuất"
                    onPress={this.handleSignOut}
                />
            </View>
        )
    }
}