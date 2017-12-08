import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    AsyncStorage,
    TextInput
} from 'react-native';



class StorageApp extends Component{

    constructor(props)
    {
        super(props);
        this.state = {'myKey': ''};
        AsyncStorage.getItem('myKey').then(
            (myValue)=>{
                this.setState({'myKey': myValue});
            }
        );
    }


    saveData(myValue) {
        AsyncStorage.setItem('myKey', myValue);
        this.setState({'myKey' : myValue});
    }
    render(){
        return(
            <View style={layout.container}>
                <Text style={layout.instructions}>
                    myValue = {this.state.myKey}
                </Text>
                <TextInput style={layout.textInput}
                    onChangeText={(test)=>{
                        this.saveData(test);
                    }}
                           value ={this.state.myKey}
                >

                </TextInput>
                <Text style={layout.instructions}>

                </Text>
            </View>
        );
    }
}


const layout = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    textInput:{

    },
    instructions:{

    }
});
export default StorageApp;