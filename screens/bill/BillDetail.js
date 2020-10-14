import React, { Component } from 'react';
import { StyleSheet, View,Text,ScrollView, Alert,Modal,TextInput,TouchableHighlight} from 'react-native';
import CustomBillDetail from '../../components/HomeComponents/CustomBillDetail';
import { Button, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class BillDetail extends Component{

    constructor(props){
        super(props);
        this.state={
            modalVisible: false,
            maBillValue: '',
            dateValue: '',
            timeValue: '',
            idCustomerValue: '',
            idBookValue: '',
            refreshing : false
        }
    }

    deleteBill = (id) => {
        fetch(`http://192.168.0.101:3000/employdb/bill/${id}`, {
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
    editBill = (idValue) => {
        const {modalVisible} = this.state
        fetch(`http://192.168.0.101:3000/employdb/bill`,{
            method : 'PUT',
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset = utf-8'
            },
            body : JSON.stringify({
                idBill: idValue,
                maBill: this.state.maBillValue,
                date: this.state.dateValue,
                time : this.state.timeValue,
                idCustomer : this.state.idCustomerValue,
                idBook : this.state.idBookValue
            })
        })       
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        })
        .catch((error) => {
            console.error(error);
        })
        Alert.alert('Đã sửa thông tin hóa đơn!');
        this.setModalVisible(!modalVisible);
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render(){
        
        const {navigation,route}=this.props;
        const {billParams} = route.params;
        const {modalVisible, maBillValue, dateValue ,timeValue , idCustomerValue , idBookValue}=this.state;

        return(
           <View style={styles.container}>
                <View>
                    <CustomBillDetail navigation={navigation}/>
                </View>
                <ScrollView>

                    <View >
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Mã hóa đơn : </Text>
                            <Text>{billParams.maBill}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Tên khách hàng : </Text>
                            <Text>{billParams.nameCustomer}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Điện thoại : </Text>
                            <Text>{billParams.phone}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Sách đã mua : </Text>
                            <Text>{billParams.nameBook}</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#CCCCCC',paddingVertical:10,paddingLeft:15}} >
                        <Text style={{fontSize:14,marginBottom:5,fontWeight:'bold'}}>Thanh toán</Text>
                    </View>
                    <View >
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Tổng số tiền : </Text>
                            <Text>{billParams.price} VND</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Ngày mua : </Text>
                            <Text>{billParams.date}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{fontWeight:'bold'}}>Thời gian mua : </Text>
                            <Text>{billParams.time}</Text>
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
                                            this.editBill(billParams.idBill);
                                            
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
                                this.deleteBill(billParams.idBill);
                                Alert.alert('Đã xóa hóa đơn !');
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
    container : {
        flex : 1,
        backgroundColor:'#fff'
    },
    detail : {
        borderBottomWidth : 1,
        padding:15,
        flexDirection:'row',
        borderBottomColor:'#FFCECE',
        justifyContent : 'space-between'
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