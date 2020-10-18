import React, { Component } from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import CustomHeader from '../../components/HomeComponents/CustomHeader';
import HomeSection1 from '../../components/HomeComponents/HomeSection1';
import ListBook1 from '../../components/HomeComponents/ListBook1';
import ListBook2 from '../../components/HomeComponents/ListBook2';
import ListBook3 from '../../components/HomeComponents/ListBook3';

export default class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            book1 : [],
            book2 : [],
            book3 : [],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then((response) => response.json())
        .then( (json) => {
            const {book1,book2,book3} = json;
            this.setState({book1 : book1,book2 : book2,book3 : book3,});
        })
        .catch((error) => console.error(error))
        .finally( () => {
            this.setState({isLoading:false});
        })
    }

    render(){
        const {book1,book2,book3} = this.state;
        const {navigation} = this.props;
        return (
            <ScrollView style={styles.container}>
                <CustomHeader navigation={navigation}/>
                <HomeSection1 />
                <ListBook1 books={book1} navigation={navigation}/>
                <ListBook2 books={book2} navigation={navigation}/>
                <ListBook3 books={book3} navigation={navigation}/>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: '#fff'
  }
});


