import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { db } from '../config/Config'
import { onValue, ref, set } from "firebase/database";
import { TextInput } from 'react-native-gesture-handler';

export default function Registro() {
  const [nombre, setNombre] = useState('')
  const [monto, setMonto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion,setDescripcion] = useState('')

  function guardar(nombre: string, monto: number, categoria:string, descripcion:string) {
    set(ref(db, 'productos/' + nombre), {
      monto: monto,
      categoria: categoria,
      descripcion: descripcion
    });
    setNombre('');
    setMonto('');
    setCategoria('');
    setDescripcion('');
    Alert.alert('Mensaje', 'Producto guardado')
}

  return (
    <View style={styles.container}>
      <Text style={styles.textmain}>Registro de gastos</Text>
      <TextInput
        placeholder='Ingrese el Nombre'
        onChangeText={(texto) => setNombre(texto)}
        style={styles.text}
        value={nombre}
      />

      <TextInput
        placeholder='Ingrese el monto'
        onChangeText={(texto) => setMonto(texto)}
        style={styles.text}
        value={monto}
      />

      <TextInput
        placeholder='Ingrese la categoria'
        onChangeText={(texto) => setCategoria(texto)}
        style={styles.text}
        value={categoria}
      />

      <TextInput
        placeholder='Ingrese una descripcion'
        onChangeText={(texto) => setDescripcion(texto)}
        style={styles.text}
        value={descripcion}
      />

      <Button title='GUARDAR' onPress={() => guardar(nombre, parseInt(monto), categoria,descripcion)} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    text:{
        borderRadius:10,
        backgroundColor:'#DADADA',
        padding:5,
        width:300,
        alignContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    textmain:{
        fontSize:20,
        color:'#FF9C4E'
    }
})