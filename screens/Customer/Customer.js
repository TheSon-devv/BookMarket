import React, { createRef } from 'react';
import { Component } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text, Modal, TouchableHighlight, TextInput, RefreshControl, Alert } from 'react-native';
import CustomerHeader from '../../components/HomeComponents/CustomerHeader';
import CategoryCustomer from './CategoryCustomer';
import { Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            modalVisible: false,
            nameValue: '',
            phoneValue: '',
            addressValue: '',
            sexValue: '',
            sileValue: '',
            refreshing: false
        }
    }
    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        this.setState({ refreshing: true });
        fetch('http://192.168.43.36:3000/employdb/customer')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ customers: json });
                this.setState({ refreshing: false });
            })
            .catch((error) => {
                console.error(error);
                this.setState({ refreshing: false });
            })
    }
    onRefresh = () => {
        this.refreshData();
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    addCustomer = () => {
        const { nameValue, phoneValue ,modalVisible} = this.state
        if (nameValue == '') {
            Alert.alert('Vui lòng nhập tên !');
        }
        else if (phoneValue == '') {
            Alert.alert('Vui lòng nhập số điện thoại !');
        }
        else {
            fetch('http://192.168.43.36:3000/employdb/customer', {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset = utf-8'
                },
                body: JSON.stringify({
                    idCustomer: 0,
                    nameCustomer: this.state.nameValue,
                    phone: this.state.phoneValue,
                    address : this.state.addressValue,
                    sex : this.state.sexValue,
                    sile : this.state.sileValue
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                })
                .catch((error) => {
                    console.error(error);
                })
            Alert.alert('Đã thêm khách hàng !');
            this.setModalVisible(!modalVisible);
        }
    }

    render() {
        const { navigation } = this.props;
        const { customers, modalVisible, nameValue, phoneValue ,addressValue , sexValue , sileValue} = this.state;
        return (
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <CustomerHeader navigation={navigation} />
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
                                        placeholder="Nhập tên (Bắt buộc)"
                                        style={styles.textInput}
                                        onChangeText={nameValue => {
                                            this.setState({ nameValue });
                                        }}
                                        value={nameValue}
                                    />

                                    <TextInput
                                        placeholder="Nhập số điện thoại (Bắt buộc)"
                                        style={styles.textInput}
                                        onChangeText={phoneValue => this.setState({ phoneValue })}
                                        value={phoneValue}
                                    />
                                    <TextInput
                                        placeholder="Nhập địa chỉ"
                                        style={styles.textInput}
                                        onChangeText={addressValue => this.setState({ addressValue })}
                                        value={addressValue}
                                    />

                                    <TextInput
                                        placeholder="Nhập giới tính"
                                        style={styles.textInput}
                                        onChangeText={sexValue => this.setState({ sexValue })}
                                        value={sexValue}
                                    />

                                    <TextInput
                                        placeholder="Nhập loại khách"
                                        style={styles.textInput}
                                        onChangeText={sileValue => this.setState({ sileValue })}
                                        value={sileValue}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            this.addCustomer();
                                            
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
                    data={customers}
                    renderItem={({ item, index }) => (
                        <CategoryCustomer
                            customer={item}
                            onPress={() => this.props.navigation.navigate('CustomerDetail', {
                                CustomerParams: customers[index]
                            })}
                        />
                    )}
                    keyExtractor={item => `${item.idCustomer}`}
                    refreshControl={
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
    headerContainer: {
        flex: 1,
        backgroundColor: '#fff'
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