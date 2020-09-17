import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default class Infomation extends Component {
    render(){
        return(
            <View>
                <View style={styles.infomationContainer}>
                    <Text style={styles.textInfomation}>BookMarket là ứng dụng mang đến trải nghiệm mua sách online tuyệt vời và hoàn
                    toàn miễn phí trên hệ điều hành Android
                    </Text>
                </View>

                <View style={styles.infomationContainer}>
                    <Text style={styles.textInfomation}>BookMarket có thư viện chứ hơn 10.000 đầu sách tiếng Việt và tiếng Anh với rất nhiều thể loại
                    được cập nhật hàng ngày. Ngoài ra, BookMarket có thể cho độc giả nhiều lựa chọn với các nguồn sách, truyện khác nhau.
                    </Text>
                </View>

                <View style={styles.infomationContainer}>
                    <Text>- Đọc sách miễn phí không giới hạn với nhiều thể loại</Text>
                    <Text>- Sách, truyện được update hàng ngày</Text>
                    <Text>- Giao diện đẹp và dễ sử dụng</Text>
                    <Text>- Đăng nhập và đăng ký dễ dàng</Text>
                    <Text>- Đọc sách offline mọi nơi</Text>
                </View>

                <View style={styles.infomationContainer}>
                    <Text style={styles.textInfomation}>
                    Email : bookmarket.theson@gmail.com
                    </Text>
                    <Text style={styles.textInfomation}>
                    Facebook : https://www.facebook.com/theson2512
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInfomation: {
        textAlign : 'justify',
        fontSize : 14
    },
    infomationContainer: {
        margin : 5,
    }
})