import React from 'react';
import { Component } from 'react';
import {View,SafeAreaView,StyleSheet,FlatList,RefreshControl,Text, Modal, TouchableHighlight, TextInput, Alert} from 'react-native';
import CustomerProduct from '../../components/HomeComponents/CustomerProduct';
import CategoryProduct from './CategoryProduct';
import { Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Product extends Component{
    
    constructor(props){
        super(props)
        this.state={
            books : [],
            refreshing : false,
            modalVisible: false,
            nameValue: '',
            priceValue: '',
            existValue: '',
            saleValue: '',
            inputValue: '',
        }
    }


    refreshData = () => {
        this.setState({refreshing : true});
        fetch('http://192.168.0.101:3000/employdb/book')       
            .then((response) => response.json())
            .then((json) => {
                this.setState({books: json});
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
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    addBook = () => {
        const { nameValue, priceValue ,modalVisible} = this.state
        if (nameValue == '') {
            Alert.alert('Vui lòng nhập tên sách !');
        }
        else if (priceValue == '') {
            Alert.alert('Vui lòng nhập giá bán !');
        }
        else {
            fetch('http://192.168.0.101:3000/employdb/book', {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset = utf-8'
                },
                body: JSON.stringify({
                    idBook: 0,
                    nameBook: this.state.nameValue,
                    price: this.state.priceValue,
                    exist : this.state.existValue,
                    sale : this.state.saleValue,
                    input : this.state.inputValue
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                })
                .catch((error) => {
                    console.error(error);
                })
            Alert.alert('Đã thêm sách !');
            this.setModalVisible(!modalVisible);
        }
    }


    render(){
        const {navigation} = this.props;
        const {books,modalVisible, nameValue, priceValue ,existValue , saleValue , inputValue} = this.state;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomerProduct navigation={navigation}/>
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
                                <View style={{ marginVertical: 10 }}>
                                    <TextInput
                                        placeholder="Nhập tên sách (Bắt buộc)"
                                        style={styles.textInput}
                                        onChangeText={nameValue => {
                                            this.setState({ nameValue });
                                        }}
                                        value={nameValue}
                                    />

                                    <TextInput
                                        placeholder="Nhập giá bán (Bắt buộc)"
                                        style={styles.textInput}
                                        onChangeText={priceValue => this.setState({ priceValue })}
                                        value={priceValue}
                                    />
                                    <TextInput
                                        placeholder="Nhập số lượng tồn"
                                        style={styles.textInput}
                                        onChangeText={existValue => this.setState({ existValue })}
                                        value={existValue}
                                    />

                                    <TextInput
                                        placeholder="Nhập số lượng có thể bán"
                                        style={styles.textInput}
                                        onChangeText={saleValue => this.setState({ saleValue })}
                                        value={saleValue}
                                    />

                                    <TextInput
                                        placeholder="Ngày nhập"
                                        style={styles.textInput}
                                        onChangeText={inputValue => this.setState({ inputValue })}
                                        value={inputValue}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            this.addBook();
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Thêm</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3", marginLeft: 10 }}
                                        onPress={() => {
                                            this.setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Thoát</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Modal>
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
                    keyExtractor={item => `${item.idBook}`}
                    refreshControl = { 
                        <RefreshControl 
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />}
                />
                <View style={{ flex: 1 }}>
                    <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => {this.setModalVisible(true)} }>
                        <FontAwesome name="plus" size={35} />   
                    </Fab>
                </View>
            </SafeAreaView> 
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flex : 1
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
    },
    textInput : {
        width: 300, 
        borderBottomWidth : 1,
        borderBottomColor : 'red',
        paddingHorizontal: 10, 
        marginBottom: 10
    }
})