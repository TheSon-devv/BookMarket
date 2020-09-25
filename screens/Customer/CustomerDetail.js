import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomerDetailHeader from '../../components/HomeComponents/CustomerDetailHeader';

export default class CustomerDetail extends Component {

    render() {
        const { navigation, route } = this.props;
        const { IdCustomer } = route.params;

        return (
            <View style={styles.container}>
                <View>
                    <CustomerDetailHeader navigation={navigation} />
                </View>
                <ScrollView>
                    
                    <View style={{ backgroundColor: '#CCCCCC', paddingLeft: 15, paddingVertical: 30 }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{IdCustomer.nameCustomer}</Text>
                    </View>
                    <View >
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Mã khách hàng : </Text>
                            <Text >{IdCustomer.id}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Loại khách : </Text>
                            <Text>{IdCustomer.sile}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Giới tính : </Text>
                            <Text>{IdCustomer.sex}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Điện thoại : </Text>
                            <Text>{IdCustomer.phone}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Địa chỉ : </Text>
                            <Text>{IdCustomer.address}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#CCCCCC', paddingVertical: 10, paddingLeft: 15 }} >
                        <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: 'bold' }}>Lịch sử mua hàng</Text>
                    </View>
                    <View >
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Tổng hóa đơn : </Text>
                            <Text>{IdCustomer.bill}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Tổng số tiền : </Text>
                            <Text>{IdCustomer.price}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{ fontWeight: 'bold' }}>Ngày mua : </Text>
                            <Text>{IdCustomer.date}</Text>
                        </View>
                    </View>
                </ScrollView>

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
    }
})