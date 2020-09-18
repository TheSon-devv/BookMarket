import React, { Component } from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import CustomHeader from '../../components/HomeComponents/CustomHeader';
import HomeSection1 from '../../components/HomeComponents/HomeSection1';
import ListBook from '../../components/HomeComponents/ListBook';


export default class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            banners: [],
            books : [],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then((response) => response.json())
        .then( (json) => {
            const { banner,book } = json;
            this.setState({banners : banner,books : book});
        })
        .catch((error) => console.error(error))
        .finally( () => {
            this.setState({isLoading:false});
        })
    }

    render(){
        const {books,banners} = this.state;
        const {navigation} = this.props;
        return (
            <ScrollView style={styles.container}>
                <CustomHeader navigation={navigation}/>
                <HomeSection1 banners={banners}/>
                <ListBook books={books} navigation={navigation}/>
                <ListBook books={books} navigation={navigation}/>
                <ListBook books={books} navigation={navigation}/>
                <ListBook books={books} navigation={navigation}/>
                <ListBook books={books} navigation={navigation}/>
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


