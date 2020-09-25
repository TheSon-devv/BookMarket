import React from 'react';
import { Component } from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Detail extends Component {
    render(){
        const {route} = this.props;
        const {bookParams} = route.params;
        return(
            <View style={{backgroundColor:"#fff"}}>
                <TouchableOpacity style={{margin : 10}} onPress={ () => this.props.navigation.goBack()}>
                    <FontAwesome name="angle-left" size={35} color="red"/>
                </TouchableOpacity>
                <View style={styles.nameBook}>
                    <View style={{elevation:5}}>
                        <Image source={bookParams.images} style={styles.imageBook}/>
                    </View>
                    <View style={styles.nameDetail}>
                        <View>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>{bookParams.nameBook}</Text>
                            <Text style={{fontWeight:'600'}}>{bookParams.nxb}</Text>
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
                    <Text style={{textAlign:'justify'}} numberOfLines={8}>{bookParams.intro}</Text>
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
