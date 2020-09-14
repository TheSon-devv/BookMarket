import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import map from '../../Image/map.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class Contact extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <Image 
                        style={{ flex: 1, alignSelf: 'stretch', width: undefined }} source={map} 
                    />
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <MaterialIcons name="location-on" style={styles.icon}/>
                        <Text style={infoText}>235 Hoàng Quốc Việt / Hà Nội</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <MaterialIcons name="phone" style={styles.icon}/>
                        <Text style={infoText}>(+84) 01694472176</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <MaterialIcons name="contact-mail" style={styles.icon}/>
                        <Text style={infoText}>bookmarket2512@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <MaterialIcons name="phone" style={styles.icon}/>
                        <Text style={infoText}>(+84) 03293662872</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6',
        marginLeft : 10
    },
    icon: {
        fontSize : 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});

export default Contact;