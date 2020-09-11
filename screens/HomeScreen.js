import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import HeaderHome from '../components/HeaderHome';
import HomeSection from '../components/HomeSection';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <HomeSection />
        </View>
    );
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: '#E3ECF5'
  }
});

export default HomeScreen;
