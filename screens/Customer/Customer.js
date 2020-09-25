import React from 'react';
import { Component } from 'react';
import {View,StyleSheet,SafeAreaView,FlatList,Text,Modal,TouchableHighlight,TextInput} from 'react-native';
import CustomerHeader from '../../components/HomeComponents/CustomerHeader';
import CategoryCustomer from './CategoryCustomer';


export default class Customer extends Component{

    constructor(props){
        super(props);
        this.state={
            customers : [],
            modalVisible: false,
            name : '',
            phone : ''
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

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render(){
        const {navigation} = this.props;
        const {customers,modalVisible,name,phone} = this.state;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomerHeader navigation={navigation}/>
                </View>
                <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View style={{marginVertical:10}}>
                                        <TextInput 
                                            placeholder="Nhập tên"
                                            style={{width:300,borderWidth:1,borderRadius:50,paddingHorizontal:10,marginBottom:10}}
                                            onChangeText={name => this.setState({name})}
                                            value={name}
                                        />

                                        <TextInput 
                                            placeholder="Nhập số điện thoại"
                                            style={{width:300,borderWidth:1,borderRadius:50,paddingHorizontal:10}}
                                            onChangeText={phone => this.setState({phone})}
                                            value={phone}
                                        />
                                    </View>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            this.setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Thêm</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <Text style={styles.textStyle}>Thêm khách hàng</Text>
                        </TouchableHighlight>
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
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})