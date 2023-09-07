import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainView}>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text for View 1</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.basicText}>Text for  View 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop:50,
    alignItems: 'flex-start', //center x axis
    justifyContent: 'flex-start', //center y axis
  },
  basicView:{
    backgroundColor:'green',
    width:'100%',
    marginBottom:5
  },
  basicText:{
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
    padding:20
  }
});
