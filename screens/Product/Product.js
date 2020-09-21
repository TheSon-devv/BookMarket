import React from 'react';
import { Component } from 'react';
import {View,SafeAreaView,StyleSheet,FlatList} from 'react-native';
import CustomerProduct from '../../components/HomeComponents/CustomerProduct';
import CategoryProduct from './CategoryProduct';

export default class Product extends Component{
    
    constructor(props){
        super(props);
        this.state={
            books : []
        }
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then((response) => response.json())
        .then((json) => {
            const {book} = json;
            this.setState({books: book});
        })
        .catch((error) => console.error(error))
    }

    render(){
        const {navigation} = this.props;
        const {books} = this.state;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomerProduct navigation={navigation}/>
                </View>
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