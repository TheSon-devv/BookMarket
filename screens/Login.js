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
                    <Text style={styles.textLogin}>Log In</Text>
                    {this.state.errorMessage && 
                        <Text style={{color : 'red'}}>
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
                                title="Login"
                                onPress={this.handleLogin}
                                color="red"
                                
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonPress}>
                        <Button
                            title="Don't have an account ? Sign Up "
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
        borderWidth:1,
        marginVertical: 6,
        borderRadius: 10
    },
    buttonPress : {
        marginTop : 8,
        
    }
})