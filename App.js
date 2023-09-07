import React,{ Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/nav';
import Generate from './src/generate';

export default function App() {
  const [hello, setHello] = useState(true);

  return (
    <View style={styles.mainView}>
    <Nav nameOfApp="Awesome app"/>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text for View 1</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.basicText}>Text for  View 2</Text>
      </View>
      <View>
        <Generate/>
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
