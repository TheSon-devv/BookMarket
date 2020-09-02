
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const ProfileItem = ({icon,name}) => (
    <View style={styles.itemContainer}>
        <MaterialCommunityIcons name={icon} size={26} color='#1e1e1e' />
        <Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]}>{name}</Text>
        <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
    </View>
);
export default class ProfileListItem extends Component {

    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then( () => this.props.navigation.navigate('Login'))
    }

    render(){
        return (
        <View style={styles.screenContainer}>

            <View style={styles.bodyContainer}>
                <TouchableOpacity>
                    <View style={styles.userContainer}>
                        <View style={styles.avatarContainer}>
                            <MaterialIcons name="person" size={26} color="#fff"/> 
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.welcomeText}>Chào mừng đến với BookMarket</Text>
                            
                        </View>
                        <FontAwesome name="angle-right" size={26} color="#1e88e5"/>
                    </View>
                </TouchableOpacity>

                {/*  */}

                <View style={styles.divider}>
                    <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng"/>
                    <ProfileItem icon="cart-outline" name="Sản phẩm đã mua"/>
                    <ProfileItem icon="eye-outline" name="Sản phẩm đã xem"/>
                    <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích"/>
                    <ProfileItem icon="star-outline" name="Sản phẩm đã đánh giá"/>
                </View>

                <View style={styles.divider}>
                    <ProfileItem name="Hỗ trợ"/>
                    
                </View>

                <View style={styles.divider}>
                    
                    <Button 
                        title="Sign Out"
                        onPress = {this.handleSignOut}
                    />
                </View>
            </View>
        </View>
            );
        }
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    headerContainer:{
        backgroundColor: '#1e88e5',
        flexDirection : 'row',
        paddingTop: 30,
        paddingBottom: 10
    },
    title: {
        paddingLeft: 150,
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },
    shoppingCart : {
        justifyContent: 'center',
        marginLeft: 100
    },
    bodyContainer:{ 
        flex: 1,
    },
    userContainer:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 22,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    avatarContainer:{
        width: 50,
        height: 50,
        backgroundColor: '#1e88e5',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textContainer:{
        flex: 1,
        marginLeft: 20,
    },
    welcomeText:{
        color: '#828282',
        marginBottom: 5
    },
    authText:{
        fontSize: 18,
        color: '#1e88e5',
        fontWeight: '500'
    },
    itemContainer:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center'
    },  
    itemText:{
        flex: 1,
        color: '#1e1e1e',
    },
    divider: {
      marginTop: 10
    }
});
