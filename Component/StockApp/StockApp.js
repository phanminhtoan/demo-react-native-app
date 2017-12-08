import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import StockButton from './StockButton';
import TextComponent from './TextComponent';
export default class StockApp extends Component{

    constructor(props){
        super(props);
        this.changIndex = this.changIndex.bind(this);
        this.test = this.test.bind(this);
        this.state = {test:'press me'};
    }

    changIndex(stockName, stockCode) {
        console.log(stockCode, stockCode);
    }

    test()
    {
        this.setState({test:'You pressed me !!!'})
    }

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

                <View style={layout.footer}>
                    <TouchableOpacity style = {layout.button}>
                        <Text>SET</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>S&P</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>NASDAQ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>Dow Jones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>Shanghai</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>Nikkei</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>Hang Seng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>TSEC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {layout.button}>
                        <Text>EURO</Text>
                    </TouchableOpacity>

                    <StockButton name = 'SET' code = 'INDEXBBK:SET' onPress={this.changIndex}/>

                    <TextComponent textName = {x = 'hello '} onPress={this.test}/>
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
    },
    footer:{
      flexDirection:'row',
      flexWrap:'wrap',
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'pink'
    },
    button:{
        margin: 10,
        borderWidth:1,
        width: 100,
        height: 50,
        borderRadius : 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray'
    }
});

