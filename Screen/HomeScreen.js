import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

export default class HomeScreen extends React.Component {

  render(){
    return (
    <View style={styles.container}>
      <TouchableOpacity
      style={
        styles.button
      }
      onPress={()=>{
        this.props.navigation.navigate("QuizScreen");
      }}>
        <Text style={styles.buttonText}>
          Start quize
        </Text>
      </TouchableOpacity>
    </View>
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
