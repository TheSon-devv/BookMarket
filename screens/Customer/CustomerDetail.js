import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomerDetailHeader from '../../components/HomeComponents/CustomerDetailHeader';


const Customer = () => {
    return(
        <View style={{marginTop:10}}>
            <View style={{borderBottomWidth : 1,padding:10,borderTopWidth:1,flexDirection:'row'}}>
                <Text>ID</Text>
                <Text>123</Text>
            </View>
            <View style={{borderBottomWidth : 1,padding:10}}>
                <Text>Loại khách</Text>
            </View>
            <View style={{borderBottomWidth : 1,padding:10}}>
                <Text>Giới tính</Text>
            </View>
        </View>
    )
}

export default class CustomerDetail extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         customers : []
    //     }
    // }
    // componentDidMount(){
    //     fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
    //     .then((response) => response.json())
    //     .then((json) => {
    //         const {customer} = json;
    //         this.setState({customers: customer});
    //     })
    //     .catch((error) => console.error(error))
    // }

    render(){
        const {navigation,route}=this.props;

        const {IdCustomer} = route.params;
        return(
           <View style={styles.container}>
                <View>
                    <CustomerDetailHeader navigation={navigation}/>
                </View>
                <ScrollView>
                    <View style={{backgroundColor:'gray',padding : 20}} >
                        <Text style={{fontSize:20,marginLeft : 20}}>{IdCustomer.nameCustomer}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{borderBottomWidth : 1,padding:10,borderTopWidth:1,flexDirection:'row'}}>
                            <Text>ID : {IdCustomer.id}</Text>
                        </View>
                        <View style={{borderBottomWidth : 1,padding:10}}>
                            <Text>Loại khách</Text>
                        </View>
                        <View style={{borderBottomWidth : 1,padding:10}}>
                            <Text>Giới tính</Text>
                        </View>
                    </View>
                </ScrollView>
                
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'#fff'
    }
})