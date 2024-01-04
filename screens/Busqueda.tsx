import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { db } from '../config/Config'
import { child, onValue, ref, set, get } from "firebase/database";


export default function Busqueda() {
  const [nombre,setNombre] = useState('')
  const [registros, setRegistros] = useState(null);
  const [datos, setDatos] = useState([])

  async function buscarPorId() {
    async function buscarPorId() {
      try {
        const snapshot = await get(child(ref(db), `usuarios/${nombre}`));
        if (snapshot.exists()) {
          setRegistros(snapshot.val());
        } else {
          setRegistros(null);
          Alert.alert('Mensaje', 'No se encontró el registro con ese ID');
        }
      } catch (error) {
        console.error('Error al buscar por ID:', error);
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textmain}>Buscar Registro por ID</Text>
      <TextInput
        placeholder='Ingrese el ID'
        onChangeText={(texto) => setNombre(texto)}
        value={nombre}
        style={styles.text}
      />
      <Button title='Buscar por ID' onPress={buscarPorId} />
      {registros && (
        <View>
          <Text>Registro Encontrado:</Text>
          <Text>{JSON.stringify(registros)}</Text>
        </View>
      )}
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