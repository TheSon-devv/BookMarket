import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './screens/Authentication/Authentication';

const App = ({navigation}) => {
  return (
    <NavigationContainer>
        <Authentication navigation={navigation}/>
    </NavigationContainer>
  );
};

export default App;
