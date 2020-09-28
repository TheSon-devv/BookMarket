import React from 'react';
import { Component } from 'react';
import {View,SafeAreaView,StyleSheet,FlatList, ActivityIndicator,RefreshControl} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomerProduct from '../../components/HomeComponents/CustomerProduct';
import CategoryProduct from './CategoryProduct';
import _ from 'lodash';

export default class Product extends Component{
    
    constructor(props){
        super(props)
        this.state={
            books : [],
            dataSearchs : [],
            isLoading : true,
            query : "",
            refreshing : false
        }
    }


    refreshData = () => {
        this.setState({refreshing : true});
        fetch('https://my-json-server.typicode.com/TheSon-devv/demo/db')       
            .then((response) => response.json())
            .then((json) => {
                const {book} = json;
                this.setState({books: book});
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

    componentDidMount(){
        this.refreshData();
    }

    // handleSearch = (text) => {
    //     const formattedQuery = text.toLowerCase();
    //     const dataSearch = _.filter(this.state.dataSearchs, book => {
    //         if (book.nameBook.includes(formattedQuery)) {
    //             return true
    //         }
    //         return false
    //     })
    //     this.setState({ dataSearch, query : text})
    // }

    render(){
        const {navigation} = this.props;
        const {books} = this.state;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomerProduct navigation={navigation}/>
                </View>

                {/* <TextInput 
                    placeholder="Nhập sách cần tìm ... "
                    style={{borderWidth:1,marginHorizontal:5,borderRadius:10}}
                    onChangeText={this.handleSearch}
                    value={this.state.query}
                /> */}
                <FlatList 
                    data={books}
                    renderItem={({item,index}) => ( 
                        <CategoryProduct 
                            book={item} 
                            onPress={ () => this.props.navigation.navigate('ProductDetail', {
                                bookParams : books[index]
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