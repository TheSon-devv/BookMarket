import React from 'react';
import { Component } from 'react';
import {SafeAreaView,TouchableOpacity,Text,Image,View} from 'react-native';
import user from '../Image/user.png';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import home from '../Image/home.png';
import Userr from '../Image/Userr.png';
import shopping_bag from '../Image/shopping_bag.png';
import shopping_cart from '../Image/shopping_cart.png';
import placeholder from '../Image/placeholder.png';
import logout from '../Image/logout.png';

export default class CustomDrawerContent extends Component{
    
    state = { currentUser:null}
    componentDidMount(){
        const {currentUser} = firebase.auth()
        this.setState({currentUser});
    }

    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then( () => this.props.navigation.navigate('Login'))
    }
    render(){
        const {currentUser} = this.state;
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{height:180,justifyContent:'center',alignItems:'center',backgroundColor:'#E06969'}}>
                    <Image source={user} />
                    <View style={{marginVertical : 10}}>
                        <Text style={{fontSize:16,color:'#fff'}}> Xin chào {currentUser && currentUser.email} !</Text>
                    </View>
                </View>
                <View style={{borderBottomWidth : 1,borderBottomColor : '#E18080'}}>
                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('HomeStack')} >
                            <View style={{flexDirection:'row'}}>
                                <Image source={home} style={{width:25,height:25,marginHorizontal : 20}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('CustomerStack')} >
                            <View style={{flexDirection:'row'}}>
                                <Image source={Userr} style={{width:25,height:25,marginHorizontal : 20}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Khách hàng</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProductStack')} >
                            <View style={{flexDirection:'row'}}>
                                <Image source={shopping_bag} style={{width:25,height:25,marginHorizontal : 20}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Sản phẩm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('BillStack')} >
                            <View style={{flexDirection:'row'}}>
                                <Image source={shopping_cart} style={{width:25,height:25,marginHorizontal : 20}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Hóa đơn</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <View>

                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Contact')} >
                            <View style={{flexDirection:'row'}}>
                                <Image source={placeholder} style={{width:25,height:25,marginHorizontal : 20}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Liên hệ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical : 20}}>
                        <TouchableOpacity onPress={this.handleSignOut} >
                            <View style={{flexDirection:'row'}}>
                                <Image source={logout} style={{width:25,height:25,marginHorizontal : 20}}/>
                                <Text style={{fontSize:16,color:'#3A2828'}}>Đăng xuất</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}