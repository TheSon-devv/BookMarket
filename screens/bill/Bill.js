import React from 'react';
import { Component } from 'react';
import {View,SafeAreaView,StyleSheet} from 'react-native';
import CustomerBill from '../../components/HomeComponents/CustomerBill';

export default class Bill extends Component{
    render(){
        const {navigation} = this.props;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomerBill navigation={navigation}/>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flex : 1
    }
})