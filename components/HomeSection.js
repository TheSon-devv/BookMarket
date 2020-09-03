import React, { Component } from 'react';
import {StyleSheet, View, Text, Image,Dimensions , ScrollView,FlatList} from 'react-native';
import section_banner from '../assets/section_banner.png';
import item_image_1 from '../assets/item_image_1.png';
import item_image_2 from '../assets/item_image_2.png';
import item_image_3 from '../assets/item_image_3.png';
import item_image_4 from '../assets/item_image_4.png';
import SectionListItem from './SectionListItem';

const {width} = Dimensions.get('window');

const ProductItem = ( {image,name,price}) => (
    <View style = {styles.itemContainer}>
        <Image source={image} style={styles.itemImage}/>
        <Text style={styles.itemName} numberOfLines={2}>
            {name}
        </Text>
        <Text style={styles.itemPrice}>{price}</Text>
    </View>
)
export default class HomeSectionComponent extends Component{

    constructor(props){
        super(props);
        this.state= {
            data : [],
            Loading : true
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then( (response) => response.json())
        .then( (json) => {
            this.setState( {data: json.book});
        })
        .catch( (error) => console.error(error))
        .finally(() => {
            this.setState( {Loading : false});
        })
    }
    render(){
        const {data,Loading} = this.state;
        
        return(
        
        <View style = {styles.sectionContainer}>
            {/*  */}
            <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng </Text>
            {/*  */}
            <Image source={section_banner} style={styles.sectionImage}/>

            {/*  */}
            <ScrollView horizontal={true}>
                <View style={styles.filterContainer}>
                    {[
                        'Tất cả',
                        'Điện thoại Smartphone',
                        'Máy tính bảng',
                        'Điện thoại'
                    ].map((e,index) => (
                        <View
                            key={index.toString()}
                            style={
                                index === 0
                                    ? styles.filterActiveButtonContainer
                                    : styles.filterInactiveButtonContainer
                            }>
                            <Text
                                style={
                                    index === 0
                                    ? styles.filterActiveText
                                    : styles.filterInactiveText
                                }
                            >
                            {e}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            {/*  */}
            <ScrollView horizontal={true}>
                <View style={styles.listItemContainer}>
                    {[
                        {image1: item_image_1,image2: item_image_2},
                        {image1: item_image_2,image2: item_image_3},
                        {image1: item_image_3,image2: item_image_1},
                        {image1: item_image_4,image2: item_image_2},
                    ].map((e,index) => (
                        <View key={index.toString()}>
                            <ProductItem 
                                name="Điện thoại Vsmart Bee (Smart Bee)"
                                image={e.image1}
                                price= "699.000đ"   
                            />
                            <ProductItem 
                                name="Điện thoại Vsmart Joy2 "
                                image={e.image2}
                                price= "699.000đ"
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.seeMore}>
                <Text style={styles.seeMoreText}>Xem thêm 636 sản phẩm</Text>
            </View>
        </View>
        
        )
    }
}
const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor : '#fff',
        paddingHorizontal: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 12
    },
    sectionImage: {
        width: width -24,
        height: 100
    },
    filterContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    filterActiveButtonContainer: {
        backgroundColor: '#242424',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        marginRight: 10,
      },
      filterInactiveButtonContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        borderColor: '#5a5a5a',
        borderWidth: 1,
        marginRight: 10,
      },
      filterActiveText: {
        color: '#fff',
      },
      filterInactiveText: {
        color: '#5a5a5a',
      },
      listItemContainer: {
        flexDirection: 'row'
    },
    itemContainer: {
        width: 100,
        marginRight: 12,
        marginVertical: 10
    },
    itemImage: {
        width: 100,
        height: 120
    },
    itemName: {
      fontSize: 14,
      marginVertical: 4,
      color: '#484848'
    },
    itemPrice: {
      fontSize: 14,
      fontWeight: '700'
    },
    seeMore: {
      marginTop: 10,
      alignItems: 'center',
      padding: 12,
      borderTopWidth: 0.6,
      borderTopColor: '#ededed'
    },
    seeMoreText: {
        color: '#0e45b4'
    }
});