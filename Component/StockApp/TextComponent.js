import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';


class TextComponent extends Component{

    constructor(props){
        super(props);

    }

    render(){

        return(
            <View>
                <TouchableHighlight onPress={()=>{
                    this.props.onPress();
                }}>
                    <Text>
                        {this.props.textName}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default TextComponent;