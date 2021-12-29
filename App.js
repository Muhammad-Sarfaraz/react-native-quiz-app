import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen'
import QuizScreen from './Screen/QuizScreen'
import ResultScreen from './Screen/ResultScreen'

const Stack=createStackNavigator();

export default class App extends React.Component {

  render(){
    return (

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{
            title:"Home"
          }}
          />
          <Stack.Screen name="QuizScreen" component={QuizScreen}
          options={{
            title:"Quiz"
          }}
           />
          <Stack.Screen name="ResultScreen" component={ResultScreen} 
          options={{
            title:"Score"
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
backgroundColor:'orange',
paddingHorizontal:20,
paddingVertical:10,
borderRadius:10
  },
  buttonText:{
    color:'white',
    fontSize:16
  }
});
