import React, { Component } from 'react';
import {StyleSheet,View,Text,Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component{
    
    state={ currentUser : null }

    render(){

        const { currentUser } = this.state;

        return(
            <View style={styles.container}>
                <Text>
                    Hi { currentUser && currentUser.email} !
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
})