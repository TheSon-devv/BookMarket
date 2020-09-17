import React, { Component } from 'react';
import {View,ActivityIndicator,Text} from 'react-native';
import firebase from '@react-native-firebase/app';



export default class Loading extends Component{
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Tab' : 'Login')
        })
    }

    render(){

        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    }
}