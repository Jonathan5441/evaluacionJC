import { Modal, StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function ImagenesScreen() {
    const [descripcion, setdescripcion] = useState('')
    const [url, seturl] = useState(' ')
    const [visible, setvisible] = useState(false)

    return (
        <View >
            <Text>ImagenesScreen</Text>
            <TextInput
                placeholder='Ingresar descripción'
                onChangeText={(texto) => (setdescripcion(texto))}
               
            />
            <TextInput
                placeholder='Ingresar URL'
                onChangeText={(texto) => (seturl(texto))}
               
            />

            <TouchableOpacity onPress={() => setvisible(true)}>
                <Text>Visualizar</Text>
                

            </TouchableOpacity>

            <Modal visible={visible}>
                <View style={styles.modal}>
                    <Text>Descripción: {descripcion}</Text>
                    <Image
                        source={{ uri: url }}
                        style={styles.img} />
                    <Button title='Salir' onPress={() => setvisible(false)} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
       
    },
    img: {
        width: 400,
        height: 500
    },
   
})