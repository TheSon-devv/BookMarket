import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Day la Home</Text>
      </View>
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
