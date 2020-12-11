import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function CoinMarketItem({ item }) {
    return (
        
        <View style={styles.container}>
            <View style={styles.headerMarket}>
                <Text>
                    {item.name}
                </Text>
            </View>
            <View>
                <Text>
                    {item.price_usd}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#09f',
        padding: 8
    },
    headerMarket: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: '#fff' 
    }
})

export default CoinMarketItem;
