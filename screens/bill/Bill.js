import React from 'react';
import { Component } from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text, Modal, TouchableHighlight, TextInput, RefreshControl, Alert } from 'react-native';
import CustomBill from '../../components/HomeComponents/CustomBill';
import CategoryBill from './CategoryBill';
import { Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Bill extends Component{

    constructor(props){
        super(props);
        this.state={
            bills : [],
            modalVisible: false,
            maBillValue: '',
            dateValue: '',
            timeValue: '',
            idCustomerValue: '',
            idBookValue: '',
            refreshing : false
        }
    }
    componentDidMount(){
        this.refreshData();
    }

    refreshData = () => {
        this.setState({refreshing : true});
        fetch('http://192.168.0.115:3000/employdb/bill')       
        .then((response) => response.json())
        .then((json) => {
            this.setState({bills: json});
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
    addBill= () => {
        const { maBillValue, idCustomerValue ,idBookValue,modalVisible} = this.state
        if (maBillValue == '') {
            Alert.alert('Vui lòng nhập mã hóa đơn !');
        }
        else if (idCustomerValue == '') {
            Alert.alert('Vui lòng nhập mã khách hàng !');
        }
        else if (idBookValue == '') {
            Alert.alert('Vui lòng nhập mã sách !');
        }
        else {
            fetch('http://192.168.0.11:3000/employdb/bill', {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset = utf-8'
                },
                body: JSON.stringify({
                    idBill: 0,
                    maBill: this.state.maBillValue,
                    date: this.state.dateValue,
                    time : this.state.timeValue,
                    idCustomer : this.state.idCustomerValue,
                    idBook: this.state.idBookValue
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    Alert.alert('Đã thêm hóa đơn !');
                })
                .catch((error) => {
                    console.error(error);
                })
            Alert.alert('Thêm thất bại!');
            this.setModalVisible(!modalVisible);
        }
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render(){
        const {navigation} = this.props;
        const {bills,modalVisible, maBillValue, dateValue ,timeValue , idCustomerValue , idBookValue}=this.state;
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomBill navigation={navigation}/>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
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
                                        placeholder="Nhập mã hóa đơn (Bắt buộc)"
                                        style={styles.textInput}
                                        onChangeText={maBillValue => {
                                            this.setState({ maBillValue });
                                        }}
                                        value={maBillValue}
                                    />
                                    <TextInput
                                        placeholder="Nhập mã khách hàng (Bắt buộc)"
                                        style={styles.textInput}
                                        onChangeText={idCustomerValue => this.setState({ idCustomerValue })}
                                        value={idCustomerValue}
                                    />

                                    <TextInput
                                        placeholder="Nhập mã sách (Bắt buộc)"
                                        style={styles.textInput}
                                        onChangeText={idBookValue => this.setState({ idBookValue })}
                                        value={idBookValue}
                                    />
                                    <TextInput
                                        placeholder="Nhập ngày tạo : yy/mm/dd"
                                        style={styles.textInput}
                                        onChangeText={dateValue => this.setState({ dateValue })}
                                        value={dateValue}
                                    />
                                    <TextInput
                                        placeholder="Nhập thời gian tạo : 00:00:00"
                                        style={styles.textInput}
                                        onChangeText={timeValue => this.setState({ timeValue })}
                                        value={timeValue}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            this.addBill();
                                            
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
                    data={bills}
                    renderItem={({item, index}) => ( 
                        <CategoryBill
                            bill={item} 
                            onPress={ () => this.props.navigation.navigate('BillDetail',{
                                billParams : bills[index]
                            })}
                        />
                    )}
                    keyExtractor={item => `${item.idBill}`}
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