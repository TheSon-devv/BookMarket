import React, { Component } from 'react';
import { StyleSheet, View,Text,ScrollView, Alert,Modal,TextInput,TouchableHighlight} from 'react-native';
import CustomerDetailHeader from '../../components/HomeComponents/CustomerDetailHeader';
import { Button, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class CustomerDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false,
            modalVisible: false,
            nameValue: '',
            phoneValue: '',
            addressValue: '',
            sexValue: '',
            sileValue: ''
        }
    } 
    
    deleteCustomer = (id) => {
        fetch(`http://192.168.43.36:3000/employdb/customer/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset = utf-8'
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    editCustomer = (idValue) => {
        const {modalVisible} = this.state
        fetch(`http://192.168.43.36:3000/employdb/customer`,{
            method : 'PUT',
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset = utf-8'
            },
            body : JSON.stringify({
                idCustomer: idValue,
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
        Alert.alert('Đã sửa thông tin khách hàng !');
        this.setModalVisible(!modalVisible);
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { navigation, route } = this.props;
        const { CustomerParams } = route.params;
        const {modalVisible, nameValue, phoneValue ,addressValue , sexValue , sileValue} = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <CustomerDetailHeader navigation={navigation} />
                </View>

                <ScrollView>

                    <View style={{ backgroundColor: '#CCCCCC', paddingLeft: 15, paddingVertical: 30 }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{CustomerParams.nameCustomer}</Text>
                    </View>
                    <View >
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Mã khách hàng : </Text>
                            <Text >{CustomerParams.idCustomer}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Loại khách : </Text>
                            <Text>{CustomerParams.sile}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Giới tính : </Text>
                            <Text>{CustomerParams.sex}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Điện thoại : </Text>
                            <Text>{CustomerParams.phone}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Địa chỉ : </Text>
                            <Text>{CustomerParams.address}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#CCCCCC', paddingVertical: 10, paddingLeft: 15 }} >
                        <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: 'bold' }}>Lịch sử mua hàng</Text>
                    </View>
                    <View >
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Tổng hóa đơn : </Text>
                            <Text>{CustomerParams.bill}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Tổng số tiền : </Text>
                            <Text>{CustomerParams.price}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Ngày mua : </Text>
                            <Text>{CustomerParams.date}</Text>
                        </View>
                    </View>
                </ScrollView>

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
                                        onChangeText={nameValue => this.setState({ nameValue }) }
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
                                            this.editCustomer(CustomerParams.idCustomer);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Sửa</Text>
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
                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <FontAwesome name="angle-double-up" size={35} />

                        <Button 
                            style={{ backgroundColor: '#3B5998' }}
                            onPress={() => { 
                                this.setModalVisible(true);
                            }}
                        >
                            <FontAwesome name="pencil" size={25} />
                        </Button>
                        <Button
                            style={{ backgroundColor: '#DD5144' }}
                            onPress={() => { 
                                this.deleteCustomer(CustomerParams.idCustomer);
                                Alert.alert('Đã xóa khách hàng !');
                                this.props.navigation.goBack();
                            }}
                        >
                            <FontAwesome name="trash" size={25} />
                        </Button>
                    </Fab>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    detail: {
        borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row',
        borderBottomColor: '#FFCECE',
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