import React, {Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class ibm extends Component{
    constructor(props){
        super(props);
        this.state = {weight: '0', height : '0', ibm : 0, result: ''};
        this.compute = this.compute.bind(this);
        this.getWeight = this.getWeight.bind(this);
    }
    compute()
    {
        let weight = parseFloat(this.state.weight);
        let height = parseFloat(this.state.height);
        let ibm = weight/Math.pow(height/100, 2);

        if (ibm < 18.5)
            Result = 'Thiếu Cân';
        else if(ibm >= 18.5 && ibm < 24.99 )
            Result = 'Bình Thường';
        else
            Result = 'Béo Phì';

        Result = 'Kết Quả ' + Result;
        this.setState({ibm: ibm, result: Result});
    }

    getWeight(weight)
    {
        this.setState({weight:weight});
    }

    render(){
        return (
            <View style = {layout.container}>
                <View style = {layout.group}>
                    <Text style = {layout.title}>
                        Cân nặng (KG)
                    </Text>
                    <TextInput style = {layout.input} keyboardType = 'numeric'
                        value = {this.state.weight}
                        onChangeText = {this.getWeight}
                    />
                </View>

                <View style = {layout.group}>
                    <Text style = {layout.title}>
                        Height (CM):
                    </Text>
                    <TextInput style = {layout.input} keyboardType = 'numeric'
                    
                        value = {this.state.height}
                        onChangeText = {(height) => {this.setState({height})}}
                    />
                </View>
                <View style = {layout.center}>
                    <View style = {layout.group}>
                        <Text style = {layout.title}>IBM: {this.state.ibm.toFixed(2)}</Text>
                    </View>
                    <View style = {layout.group}>
                        <Text style = {layout.result}>
                             {this.state.result}
                        </Text>
                    </View>
                    <View style = {layout.group}>
                        <TouchableOpacity style = {layout.button}
                        onPress = {this.compute}>
                            <Text style = {layout.buttonText}>Compute</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const layout = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        flex:1,
        padding : 20,
    },
    group :{
        marginTop : 20
    },
    button :{
        backgroundColor: 'lightblue',
        borderWidth : 1,
        padding: 20
    },
    buttonText : {
        fontSize: 20
    },
    input : {
        padding : 10,
        borderWidth:1,
        height : 60,

    },
    title:{
        fontSize: 20
    },
    center:{
        alignItems: 'center'
    },
    result:{
        fontSize: 25,
        color : 'red'
    }
});


