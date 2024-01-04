import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Welcome( {navigation}:any ) {
  return (
    <View>
      <Text style={styles.text}>
        Jonathan Carrasco
      </Text>
    <Image source={{uri:"https://cdn.aarp.net/content/dam/aarp/tourism/national/2017/10/1140-maroon-bells-mountains-north-america-esp.jpg"}} style={styles.img}/>
    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Bienvenido!')}>
        <Text>Iniciar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
      height:400,
    },
    text:{
      fontSize:30,
      marginLeft:60
    },
    button:{
      alignItems:'center',
      padding:10,
      backgroundColor: '#DDDDDD',
    }
})