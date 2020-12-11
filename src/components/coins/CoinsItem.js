import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const CoinsItems = ({ item, onPress }) => {
    function getArrow() {
        if (item.percent_change_1h > 0) {
            return require('qonexia/src/assets/images/arrow_up.png');
        } else if (item.percent_change_1h < 0) {
            return require('qonexia/src/assets/images/arrow_down.png');
        }
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View>
                <Text style={styles.flatStyle}>{item.symbol}</Text>
                <Text style={styles.flatStyle}>{item.name}</Text>
                <Text style={styles.flatStyle}>{`$${item.price_usd}`}</Text>
            </View>
            <View>
                <Text style={styles.flatStyle}>{item.percent_change_1h}</Text>
                <Image source={getArrow()} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    flatStyle: {
        color: '#fff',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'green',
        borderWidth: 1,
    },
});

export default CoinsItems;
