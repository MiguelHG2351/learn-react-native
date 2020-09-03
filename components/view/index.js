import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Viewer() {
    return <>
    <View style={style.container}>
        <Text>Hola Mundo</Text>
    </View>
</>
}

const style = StyleSheet.create({
    container: {
        height: 45,
        width: "100%",
    }
})

export default Viewer