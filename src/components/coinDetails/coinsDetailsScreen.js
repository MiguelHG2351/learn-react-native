import React from 'react';
import { View, Text, Image, SectionList, StyleSheet } from 'react-native';
import Http from 'qonexia/src/libs/http';
import { FlatList } from 'react-native-gesture-handler';
import CoinMarketItem from './coinMarketItem'

class CoinsDetailsScreen extends React.Component {
    state = {
        coin: {},
        markets: [],
    };

    getSymbolIcon(name) {
        if (name) {
            const symbol = name.toLowerCase().replace(' ', '-');
            return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
        }
    }

    getSections(coin) {
        const section = [
            {
                title: 'Market Cap',
                data: [coin.market_cap_usd],
            },
            {
                title: 'Volume 24h',
                data: [coin.volume24],
            },
            {
                title: 'Change 24h',
                data: [coin.percent_change_24h],
            },
        ];
        return section;
    }

    async getMarkets(coinId) {
        const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
        const markets = await Http.instance.get(url);
        this.setState({ markets });
    }

    componentDidMount() {
        const { coin } = this.props.route.params;
        this.props.navigation.setOptions({ title: coin.symbol });
        this.getMarkets(coin.id);
        this.setState({ coin });
    }

    render() {
        const { coin, markets } = this.state;

        return (
            <View style={ styles.container }>
                <View style={ styles.containerCard }>
                    <View style={ styles.headerCard }>
                        <Image
                            source={{ uri: this.getSymbolIcon( coin.name ) }}
                            style={ styles.iconImage }
                        />
                        <Text style={ styles.textCoin }>{ coin.name }</Text>
                    </View>
                    <SectionList
                        style={ styles.containerSection }
                        sections={ this.getSections(coin) }
                        keyExtractor={ (item) => item }
                        renderItem={({ item }) => (
                            <View style={ styles.sectionView }>
                                <Text>{ item }</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section }) => (
                            <View style={styles.sectionList}>
                                <Text>{section.title}</Text>
                            </View>
                        )}
                    />
                </View>
                <Text>Markets</Text>
                <FlatList
                    horizontal={true}
                    data={markets}
                    keyExtractor={ (_, index) => index.toString()}
                    renderItem={({ item }) => <CoinMarketItem item={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        backgroundColor: 'rgb(11, 12, 33)',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        overflow: 'scroll',
    },
    containerCard: {
        // borderColor: 'red',
        // borderWidth: 2,
        borderRadius: 12,
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        backgroundColor: '#24317A',
        flex: 0.5,
    },
    iconImage: {
        width: 80,
        height: 80,
    },
    textCoin: {
        color: '#ffe',
        fontSize: 26,
        fontWeight: '700',
    },
    containerSection: {
        color: '#fff',
        flex: 0.5,
    },
    sectionView: {
        backgroundColor: '#24385b',
        padding: 10,
    },
    sectionList: {
        backgroundColor: '#0791e6',
        padding: 12,
    },
});

export default CoinsDetailsScreen;
