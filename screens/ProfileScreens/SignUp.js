import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput, ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import backgroundSignUp from '../../Image/backgroundSignUp.jpg';

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
                <ImageBackground source={backgroundSignUp} style={styles.image}>
                    <View style={styles.fromSignUp}>
                        {this.state.errorMessage && 
                        <Text style={{color : 'red',alignItems:'center',justifyContent:'center'}}>
                            {this.state.errorMessage}
                        </Text>
                        }

                        <Text style={styles.textSignUp}>ĐĂNG KÝ</Text>

                        <TextInput 
                            placeholder="Email"
                            placeholderTextColor='#fff'
                            autoCapitalize="none"
                            style = {styles.textInput}
                            onChangeText ={email => this.setState({email})}
                            value={this.state.email}
                        />
                        <TextInput 
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor='#fff'
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
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,

    },
    textInput: {
        height: 40,
        width: '70%',
        borderColor: 'gray',
        borderWidth:0.5,
        marginVertical: 8,
        borderRadius : 10
    },
    textSignUp : {
        fontSize : 20,
        color : '#003300'
    },  
    buttonPress : {
        marginTop : 8,
    },
    fromSignUp : {
        alignItems : 'center'
    },
    image : {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center" 
    },  
})