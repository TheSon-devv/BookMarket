import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput, Dimensions,Image,TouchableOpacity,Alert} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import bookLogin from '../../Image/bookLogin.png';

export default class SignUp extends Component{
    
    state={
            email:'', password:'', errorMessage: null
        }

    handleSignUp = () => {
        const {email,password} = this.state;
        if(email == ''){
            Alert.alert('Vui lòng nhập tên người dùng !');
        }
        else if(password == ''){
            Alert.alert('Vui lòng nhập mật khẩu !');
        }
        else{
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email,this.state.password)
                .then( () => Alert.alert("Đăng ký thành công !"))
                .then( () => this.props.navigation.navigate('Drawer'))
                .catch(error => this.setState( {errorMessage: error.message} ) )
            return true;
        }
        return false;
    }
    render(){

        return(
            <View style={styles.container}>
                    
                    <View style={styles.formLogin}>
                        
                        <Image source={bookLogin} style={styles.imageBook}/>

                        <View style={{marginBottom : 30}}>
                            <Text style={styles.textLogin}>ĐĂNG KÝ</Text>
                        </View>

                        <TextInput 
                            placeholder="Email"
                            placeholderTextColor="#171414"
                            autoCapitalize="none"
                            style = {styles.textInput}
                            onChangeText ={email => this.setState({email})}
                            value={this.state.email}
                        />
                        <TextInput 
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor="#171414"
                            autoCapitalize="none"
                            style = {styles.textInput}
                            onChangeText ={password => this.setState({password})}
                            value={this.state.password}
                        />
                        <View style={{justifyContent:'center',marginHorizontal:30}}>
                            {this.state.errorMessage && 
                            <Text style={{color : 'red',fontSize:18}}>
                                {this.state.errorMessage}
                            </Text>
                            }
                        </View>
                        <View style={styles.buttonPress}>
                        <TouchableOpacity>
                            <Button
                                title="Đăng Ký"
                                onPress={this.handleSignUp}
                                color="#BF1010"
                                
                            />
                        </TouchableOpacity>
                        </View>
                        <View style={styles.buttonPress}>
                        <Button
                            title="Đã có tài khoản ? Đăng nhập "
                            onPress={ () => this.props.navigation.navigate('Login')}
                            color="#BF1010"
                        />
                        </View>
                    </View>
            </View>
        )
    }
}
const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');
const itemWidth = ( width - 280 ) / 2;
const itemImageHeight = (itemWidth / 300) * 266;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#FFF',
    },
    formLogin : {
        alignItems : 'center',
        marginTop : 50
    },
    imageBook : {
        width : itemWidth,
        height : itemImageHeight,
        marginLeft : 20,
        marginBottom : 30
    },
    textLogin : {
        fontSize :25,
        color : 'red',
        fontWeight : 'bold'
    },
    textInput: {
        height: 50,
        width: '80%',
        borderColor: 'gray',
        borderWidth:0.5,
        marginVertical: 8,
        borderRadius: 10,
        fontSize : 16,
        color : '#000000'
    },
    buttonPress : {
        marginTop : 8,
        width : '80%',
    }
})