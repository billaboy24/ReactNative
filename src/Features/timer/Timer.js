import React,{useState} from "react";
import { View,StyleSheet,Text } from "react-native";
import { Countdown } from "../../Components/Countdown";
import { RoundedButton } from "../../Components/RoundedButton";
import {ProgressBar} from 'react-native-paper';
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

export const Timer =({focusSubject,onTimerEnd})=>{
    useKeepAwake();

const[minutes,SetMinutes]=useState(0.1);
const[isStarted,setIsStarted]=useState(false);
const[progress,setProgress]=useState(1);

const onProgress= (progress)=>{
    setProgress(progress)
};
const onEnd=()=>{
    SetMinutes(0.1);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
};

const changeTime=(min)=>{
    SetMinutes(min);
    setProgress(1);
    setIsStarted(false);
};


    return(
        <View style={styles.container}>
            <View style={styles.countdown}><Countdown 
            minutes={minutes}
            isPaused={!isStarted} 
            onProgress={onProgress}
            onEnd={onEnd}/>
            
            </View>
            <View style={{paddingTop:24}}>
            <Text style={styles.title}>Focusing On: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
            </View >
            <View style={StyleSheet.progress}>
                <ProgressBar
                

                progress={progress}
                color="#5E84E2"
                style={{height:10}}
                />
            </View>
            <View style={styles.countdown}>
                <Timing onChangeTime={changeTime} />
            </View>
            <View style={styles.countdown}>
            {isStarted?(
                <RoundedButton title="pause"  onPress={() =>setIsStarted(false)}/>
            
            ):(
                <RoundedButton title="start"  onPress={() =>setIsStarted(true)}/>
            
            )}
            </View>
            </View>
    );
 };

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        color:'white',
        textAlign:'center',


    },
    task:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
    },
    countdown:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    progress:{
        flex:1,
        paddingTop:15

    }
    
});