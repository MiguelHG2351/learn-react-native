import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import Http from 'qonexia/src/libs/http';

import CoinsItems from './CoinsItem';

class CoinsScreen extends Component {
    handlePress = (coin) => {
        this.props.navigation.navigate('Coins2', { coin });
    };

    state = {
        coins: [],
        loading: false,
    };

    componentDidMount = async () => {
        this.setState({ loading: true });
        const res = await Http.instance.get(
            'https://api.coinlore.net/api/tickers/'
        );
        this.setState({ coins: res.data, loading: false });
    };

    render() {
        const { coins, loading } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Coins Screen</Text>
                <Text style={styles.btnText}> Ir a Details</Text>
                {loading ? (
                    <ActivityIndicator color="#fff" size="large" />
                ) : null}
                <FlatList
                    data={coins}
                    renderItem={({ item }) => (
                        <CoinsItems
                            item={item}
                            onPress={() => this.handlePress(item)}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#fff',
    },
    btnText: {
        padding: 8,
        backgroundColor: '#09f',
        borderRadius: 8,
        margin: 16,
        color: '#fff',
        textAlign: 'center',
    },
});

export default CoinsScreen;
