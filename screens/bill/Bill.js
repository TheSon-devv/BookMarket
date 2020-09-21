import React from 'react';
import { Component } from 'react';
import {View,SafeAreaView,StyleSheet,FlatList} from 'react-native';
import CustomBill from '../../components/HomeComponents/CustomBill';
import CategoryBill from './CategoryBill';

export default class Bill extends Component{

    constructor(props){
        super(props);
        this.state={
            bills : []
        }
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then((response) => response.json())
        .then((json) => {
            const {bill} = json;
            this.setState({bills: bill});
        })
        .catch((error) => console.error(error))
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