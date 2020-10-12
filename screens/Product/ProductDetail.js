import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Modal, TextInput, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomerDetailProduct from '../../components/HomeComponents/CustomDetailProduct';

export default class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false,
            modalVisible: false,
            nameValue: '',
            priceValue: '',
            existValue: '',
            saleValue: '',
            inputValue: ''
        }
    }

    deleteBook = (id) => {
        fetch(`http://192.168.0.101:3000/employdb/book/${id}`, {
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
    editBook = (idValue) => {
        const { modalVisible } = this.state
        fetch(`http://192.168.0.101:3000/employdb/book`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset = utf-8'
            },
            body: JSON.stringify({
                id: idValue,
                nameBook: this.state.nameValue,
                price: this.state.priceValue,
                exist: this.state.existValue,
                sale: this.state.saleValue,
                input: this.state.inputValue
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            })
            .catch((error) => {
                console.error(error);
            })
        Alert.alert('Đã sửa thông tin sách !');
        this.setModalVisible(!modalVisible);
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {

        const { navigation, route } = this.props;
        const { bookParams } = route.params;
        const { modalVisible, nameValue, priceValue, existValue, saleValue, inputValue } = this.state;
        return (
            <View style={styles.container}>
                <View>
                    <CustomerDetailProduct navigation={navigation} />
                </View>
                <ScrollView>
                    <View >
                        <View>
                            <View style={styles.detail}>
                                <Text style={{ fontWeight: 'bold' }}>Mã sách : </Text>
                                <Text>{bookParams.id}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{ fontWeight: 'bold' }}>Tên sách : </Text>
                                <Text>{bookParams.nameBook}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{ fontWeight: 'bold' }}>Tác giả : </Text>
                                <Text>{bookParams.nxb}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{ fontWeight: 'bold' }}>Giá bán lẻ : </Text>
                                <Text>{bookParams.price}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{ fontWeight: 'bold' }}>Trạng thái : </Text>
                                <Text>{bookParams.tt}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{ fontWeight: 'bold' }}>Ngày nhập : </Text>
                                <Text>{bookParams.input}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Text style={{ fontWeight: 'bold' }}>Tồn : </Text>
                                <Text>{bookParams.exist}</Text>
                            </View>
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
                                            this.editBook(bookParams.id);
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
                                this.deleteBook(bookParams.id);
                                Alert.alert('Đã xóa sách !');
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
        backgroundColor: '#fff',
    },
    detail: {
        borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row',
        borderBottomColor: '#FFCECE',
        justifyContent: 'space-between'
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
        borderWidth: 1, 
        borderRadius: 50, 
        paddingHorizontal: 10, 
        marginBottom: 10
    }
})