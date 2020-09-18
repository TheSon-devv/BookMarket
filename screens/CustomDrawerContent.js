import React from 'react';
import { Component } from 'react';
import {SafeAreaView,TouchableOpacity,Text,Image,View} from 'react-native';
import user from '../Image/user.png';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


export default class CustomDrawerContent extends Component{
    
    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then( () => this.props.navigation.navigate('Login'))
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{height:150,justifyContent:'center',alignItems:'center',backgroundColor:'#E06969'}}>
                    <Image source={user} />
                </View>
                <View style={{borderBottomWidth : 1,borderBottomColor : '#E18080'}}>
                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('HomeStack')} >
                            <View style={{flexDirection:'row',marginLeft : 20}}>
                                <FontAweSome name="shopping-bag" size={20} style={{marginRight : 20,color:'gray'}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Customer')} >
                            <View style={{flexDirection:'row',marginLeft : 20}}>
                                <FontAweSome name="user" size={24} style={{marginRight : 24,color:'gray'}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Khách hàng</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Product')} >
                            <View style={{flexDirection:'row',marginLeft : 20}}>
                                <FontAweSome name="user" size={24} style={{marginRight : 24,color:'gray'}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Sản phẩm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Bill')} >
                            <View style={{flexDirection:'row',marginLeft : 20}}>
                                <FontAweSome name="user" size={24} style={{marginRight : 24,color:'gray'}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Hóa đơn</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Cart')} >
                            <View style={{flexDirection:'row',marginLeft : 20}}>
                                <FontAweSome name="shopping-bag" size={20} style={{marginRight : 20,color:'gray'}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Giỏ hàng</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Contact')} >
                            <View style={{flexDirection:'row',marginLeft : 20}}>
                                <FontAweSome name="map-marker" size={20} style={{marginRight : 28,color:'gray'}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Liên hệ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    
                </View>

                <View>
                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={this.handleSignOut} >
                            <View style={{flexDirection:'row',marginLeft : 20}}>
                                <FontAweSome name="sign-out" size={20} style={{marginRight : 20,color:'gray'}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Đăng xuất</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}