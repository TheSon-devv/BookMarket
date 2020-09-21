import React from 'react';
import { Component } from 'react';
import {View,StyleSheet,SafeAreaView,FlatList,Text} from 'react-native';
import CustomerHeader from '../../components/HomeComponents/CustomerHeader';
import CategoryCustomer from './CategoryCustomer';


export default class Customer extends Component{

    constructor(props){
        super(props);
        this.state={
            customers : []
        }
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then((response) => response.json())
        .then((json) => {
            const {customer} = json;
            this.setState({customers: customer});
        })
        .catch((error) => console.error(error))
    }

    render(){
        const {navigation} = this.props;
        const {customers} = this.state;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomerHeader navigation={navigation}/>
                </View>
                <FlatList 
                    data={customers}
                    renderItem={({item, index}) => ( 
                        <CategoryCustomer 
                            customer={item} 
                            onPress={ () => this.props.navigation.navigate('CustomerDetail',{
                                IdCustomer : customers[index]
                            })}
                        />
                    )}
                    keyExtractor={item => `${item.id}`}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flex : 1,
        backgroundColor : '#fff'
    }
})