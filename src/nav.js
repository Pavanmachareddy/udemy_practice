import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Nav = ({nameOfApp}) => {
  return (
    <View style={StyleSheet.nav}>
      <Text>{nameOfApp}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    nav:{
        backgroundColor:'red',
        alignItems:'center',
        padding:10,
        width:'100%'
    }
  });
  
export default Nav