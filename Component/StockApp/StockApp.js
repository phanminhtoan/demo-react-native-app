import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class StockApp extends Component{
    render(){
        return(
            <View style ={layout.container}>
                <View style = {layout.header}>
                    <Text style = {layout.stockName}>
                        SET
                    </Text>
                    <Text style = {layout.stockIndex}>
                        9.999.999
                    </Text>
                    <Text style = {layout.stockChange}>
                        +125.15 (0.56%)
                    </Text>
                </View>

            </View>
        );
    }
}

const layout = StyleSheet.create({
    container :{
        flex :1
    },
    header :{
        flex :1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    stockName: {
        fontSize: 30
    },
    stockIndex: {
        fontSize: 80
    },
    stockChange: {
        fontSize: 40
    }
});

