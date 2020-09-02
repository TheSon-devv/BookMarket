import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '@react-native-firebase/app';


export default class Login extends Component{

    state={ email:'', password:'', errorMessage: null}

    handleLogin = () => {
        const { email,password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then( () => this.props.navigation.navigate('ProfileListItem'))
            .catch( error => this.setState( {errorMessage: error.message} ) )
    }
    
    render(){

        return(
            <View style={styles.container}>
                    
                    {this.state.errorMessage && 
                        <Text style={{color : 'red',}}>
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
                        <TouchableOpacity>
                            <Button
                                title="Đăng nhập"
                                onPress={this.handleLogin}
                                color="red"
                                
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonPress}>
                        <Button
                            title="Chưa có tài khoản ? Đăng ký "
                            onPress={ () => this.props.navigation.navigate('SignUp')}
                            color="red"
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
    textLogin : {
        fontSize :18
    },
    textInput: {
        height: 40,
        width: '70%',
        borderColor: 'gray',
        borderWidth:0.5,
        marginVertical: 8,
        borderRadius: 10,
    },
    buttonPress : {
        marginTop : 8,
        
    }
})