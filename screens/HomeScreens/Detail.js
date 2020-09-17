import React from 'react';
import { Component } from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import sach1 from '../../Image/sach1.png'


export default class Detail extends Component {
    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                <TouchableOpacity style={{margin : 10}} onPress={ () => this.props.navigation.goBack()}>
                    <FontAwesome name="angle-left" size={35} color="red"/>
                </TouchableOpacity>
                <View style={styles.nameBook}>
                    <View>
                        <Image source={sach1} style={styles.imageBook}/>
                    </View>
                    <View style={styles.nameDetail}>
                        <View>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Tên tác phẩm</Text>
                            <Text style={{fontWeight:'600'}}>Tên tác giả</Text>
                        </View>
                        <View style={{justifyContent:'flex-end',width:100}}>
                            <Button 
                                title="Mua + "
                                onPress={ () => this.props.navigation.navigate('Cart')}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.introBook}>
                    <View style={{marginVertical:5}}>
                        <Text style={{fontSize : 18,fontWeight:'500'}}>Giới thiệu</Text>
                    </View>
                    <Text  style={{textAlign:'justify'}} numberOfLines={8}>Đắc nhân tâm của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất  và có tầm ảnh hưởng nhất của mọi thời đại…
Dale Breckenridge Carnegie (24/11/1888 - 1/11/1955) là một nhà văn và nhà thuyết trình Mỹ và là người chịu trách nhiệm các lớp phát triển con người, kỹ năng, nghệ thuật bán hàng, huấn luyện đoàn thể, nói trước công chúng và các kỹ năng giao tiếp giữa mọi người. Ra đời trong cảnh nghèo đói tại một trang trại ở Missouri, Dale Carnegie là tác giả cuốn sách Đắc nhân tâm- được xuất bản lần đầu năm 1936 và là một trong những quyển sách nổi tiếng nhất thế giới thuộc thể loại self-help, liên tục đứng đầu danh mục bán chạy nhất của mọi thời đại do báo The New York Times bình chọn suốt 10 năm liền. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia, đặc biệt bản tiếng Anh đã bán được hơn 15 triệu bản trên thế giới.</Text>
                    <View style={{marginTop : 10}}>
                        <Text>Thể loại : Khoa học - Viễn tưởng</Text>
                        <Text>Lượt xem : 0</Text>
                        <Text>Trạng thái : Hoàn thành </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');
const itemWidth = ( width - 200 ) / 2;
const itemImageHeight = (itemWidth / 200) * 292;

const styles = StyleSheet.create({
    imageBook : {
        width : itemWidth,
        height : itemImageHeight,
        margin : 20
    },
    nameBook : {
        flexDirection : 'row',
    },
    nameDetail : {
        marginTop : 17,
        width : 200,
        height : 157,
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    introBook : {
        width : '95%',
        height : 300,
        marginHorizontal : 10,
        borderRadius : 5,
        paddingHorizontal: 12
    }
})
