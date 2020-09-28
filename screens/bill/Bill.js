import React from 'react';
import { Component } from 'react';
import {View,SafeAreaView,StyleSheet,FlatList,RefreshControl} from 'react-native';
import CustomBill from '../../components/HomeComponents/CustomBill';
import CategoryBill from './CategoryBill';

export default class Bill extends Component{

    constructor(props){
        super(props);
        this.state={
            bills : [],
            refreshing : false
        }
    }
    componentDidMount(){
        this.refreshData();
    }

    refreshData = () => {
        this.setState({refreshing : true});
        fetch('https://my-json-server.typicode.com/TheSon-devv/demo/db')       
        .then((response) => response.json())
        .then((json) => {
            const {bill} = json;
            this.setState({bills: bill});
            this.setState({refreshing : false});
        })
        .catch((error) => {
            console.error(error);
            this.setState({refreshing : false});
        })
    }

    onRefresh = () => {
        this.refreshData();
    }

    render(){
        const {navigation} = this.props;
        const {bills}=this.state;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomBill navigation={navigation}/>
                </View>
                <FlatList 
                    data={bills}
                    renderItem={({item, index}) => ( 
                        <CategoryBill
                            bill={item} 
                            onPress={ () => this.props.navigation.navigate('BillDetail',{
                                billParams : bills[index]
                            })}
                        />
                    )}
                    keyExtractor={item => `${item.id}`}
                    refreshControl = { 
                        <RefreshControl 
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flex : 1
    }
})