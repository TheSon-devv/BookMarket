import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import HeaderHome from '../../components/HomeComponents/HeaderHome';
import HomeSection1 from '../../components/HomeComponents/HomeSection1';
import {createStackNavigator} from '@react-navigation/stack';
import ListBook from '../../components/HomeComponents/ListBook';

const HomeStack = createStackNavigator();

export default class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            books : [],
            banners: [],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then((response) => response.json())
        .then( (json) => {
            const { book,banner } = json;
            this.setState({books : book, banners : banner});
        })
        .catch((error) => console.error(error))
        .finally( () => {
            this.setState({isLoading:false});
        })
    }

    render(){
        const {books,banners} = this.state;
        return (
            <ScrollView style={styles.container}>
                <HeaderHome />
                <HomeSection1 banners={banners}/>
                <ListBook books={books}/>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: '#E3ECF5'
  }
});


