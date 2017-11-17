import React, {Component} from 'react'
import {
    Style,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native'

export default class StopWatch extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            timeElapse :null ,
            runing: false,
            startTime: null,
            laps:[]
        }
        this.handleLapPress = this.handleLapPress.bind(this);
        this.startStopButton = this.startStopButton.bind(this);
        this.handleStartPress = this.handleStartPress.bind(this);
    }

    handleLapPress()
    {
        var lap = this.state.timeElapse;
        this.setState({
            startTime: new Date(),
            laps: this.state.laps.concat([lap])
        });
       
    }
    
    handleStartPress()
    {
        if(this.state.runing){
            clearInterval(this.interval);
            this.setState({runing: false});
            return;
        }

        this.setState({startTime: new Date()});

        this.interval = setInterval(()=>{
            this.setState({
                timeElapse : new Date() - this.state.startTime,
                runing: true
            });
        }, 30);
    }
    

    startStopButton()
    {
        var Style_Layout = this.state.runing
        ? layout.stopButton
        : layout.startButton;

        return (
            <TouchableOpacity 
                underlayColor = "gray"
                onPress = {this.handleStartPress} 
                style = {[layout.button, Style_Layout]}
            >
                <Text>
                    {this.state.runing 
                        ? 'Stop'
                        : 'Start'
                    }
                </Text>
            </TouchableOpacity>
        );
    }


    lapButton(){
        return (
            <TouchableOpacity
                style = {layout.button}
                underlayColor = 'gray'
                onPress = {this.handleLapPress}
            >
                <Text>
                    Lap
                </Text>
            </TouchableOpacity>
        );

    }

    lap(){
        return this.state.laps.map(
            function(time,index){
                return(
                    <View
                        key = {index}
                        style = {layout.lap}
                    >
                        <Text style = {layout.lapText}>
                            Lap #{index + 1}
                        </Text>
                        <Text style = {layout.lapText}>
                            {time} 
                        </Text>
                    </View>
                );
            }
        );
    }


    render(){
        return(
            <View style = {layout.container}>
                <View style = {layout.header}>
                    <View style = {layout.timerWrapper}>
                        <Text style = {layout.timer}>
                            {this.state.timeElapse}
                        </Text>
                    </View>
                    <View style = {layout.buttonWrapper}>       
                        {this.lapButton()}                     
                        {this.startStopButton()}
                    </View>
                </View>
                <View style = {layout.footer}>
                    {this.lap()}
                </View>
            </View> 
        );
    }
}

const layout = StyleSheet.create({
    container :{
        flex :1,
        margin : 20
    },
    
    timerWrapper:{
        flex :5,
        justifyContent : 'center',
        alignItems: 'center'
    },

    buttonWrapper:{
        flex :3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    lap:{
        justifyContent: 'space-around',
        flexDirection : 'row',
        backgroundColor : 'lightgray',
        margin:10,
        padding:10
    },

    footer:{
        flex :1
    },
    header:{
        flex :1
    },

    timer:{
        fontSize : 60
    },

    button:{
        borderWidth :2,
        height :100,
        width : 100,
        borderRadius : 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    lapText:{
        fontSize : 30
    },
    startButton:{
        borderColor : 'green'
    },
    stopButton:{
        borderColor: 'red'
    }
});