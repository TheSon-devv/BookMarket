import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput,TouchableOpacity, ImageBackground, Alert} from 'react-native';
import firebase from '@react-native-firebase/app';
import background from '../../Image/background.jpg';

export default class Login extends Component{

    state={ email:'', password:'', errorMessage: null}

    handleLogin = () => {
        const { email,password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then( () => this.props.navigation.navigate('Tab'))
            .then( () => Alert.alert("Đăng nhập thành công !"))
            .catch( error => this.setState( {errorMessage: error.message} ) )
    }
    
    render(){

        return(
            <View style={styles.container}>
                    
                <ImageBackground source={background} style={styles.image}>
                    <View style={styles.formLogin}>
                        
                        

                        <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>

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
                        <View style={{justifyContent:'center',marginHorizontal:25}}>
                            {this.state.errorMessage && 
                            <Text style={{color : 'red',fontSize:20}}>
                                {this.state.errorMessage}
                            </Text>
                            }
                        </View>
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
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection : 'column',
        backgroundColor : '#FFF',
    },
    formLogin : {
        alignItems: 'center'
    },
    textLogin : {
        fontSize :20,
        color : '#fff'
    },
    textInput: {
        height: 40,
        width: '70%',
        borderColor: 'gray',
        borderWidth:0.5,
        marginVertical: 8,
        borderRadius: 10,
        color:'#fff'
    },
    buttonPress : {
        marginTop : 8,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
})