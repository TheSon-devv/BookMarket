import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class SignUp extends Component{
    
    state={
            email:'', password:'', errorMessage: null
        }

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then( () => this.props.navigation.navigate('Login'))
            .catch(error => this.setState( {errorMessage: error.message} )
            )
    }
    render(){

        return(
            <View style={styles.container}>
                
                {this.state.errorMessage && 
                    <Text style={{color : 'red',alignItems:'center',justifyContent:'center'}}>
                        {this.state.errorMessage}
                    </Text>
                }

                <TextInput 
                    placeholder="Email"
                    autoCapitalize="none"
                    style = {styles.textInput}
                    onChangeText ={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput 
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style = {styles.textInput}
                    onChangeText ={password => this.setState({password})}
                    value={this.state.password}
                />
                    
                <View style={styles.buttonPress}>
                    <Button
                        title="Đăng ký"
                        onPress={this.handleSignUp}
                    />
                </View>
                <View style={styles.buttonPress}>
                    <Button
                        title="Đã có tài khoản ? Đăng nhập "
                        onPress={ () => this.props.navigation.navigate('Login')}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    textInput: {
        height: 40,
        width: '70%',
        borderColor: 'gray',
        borderWidth:0.5,
        marginVertical: 8,
        borderRadius : 10
    },
    buttonPress : {
        marginTop : 8,
        
    }
})