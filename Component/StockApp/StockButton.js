import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class StockButton extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity style ={layout.button}
                    onPress={()=>{
                        this.props.onPress(
                            this.props.name,
                            this.props.code
                        );
                    }}
                >
                    <Text>
                        {this.props.name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const layout = StyleSheet.create({

    buttonText:{
        fontSize: 20
    },
    button:{
        margin : 10,
        borderWidth: 1,
        width : 100,
        height : 50,
        borderRadius : 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray'
    }

});

