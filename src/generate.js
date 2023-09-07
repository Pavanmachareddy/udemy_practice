import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const generate = () => {
  return (
    <View style={styles.generate}>
      <Text style={{color:'#fff'}}>Add number</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    generate:{
        backgroundColor:'#00BCD4',
        alignItems:'center',
        padding:10,
        width:'100%'
    }
  });

export default generate