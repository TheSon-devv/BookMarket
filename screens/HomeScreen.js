import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import HeaderHome from '../components/HeaderHome';

const HomeScreen = () => {
  return (
    <>
      <HeaderHome />
    </>
  );
};

const styles = StyleSheet.create({
  container : {
   flex: 1,
   justifyContent: 'center',
   alignItems:'center'
  }
});

export default HomeScreen;
