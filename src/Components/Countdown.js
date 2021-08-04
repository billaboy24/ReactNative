import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet } from 'react-native';


const minutesToMillis=(min)=>min*1000*60;
const formatTime=(time)=>time <10 ? `0${time}` :time;
export const Countdown=({
    minutes =20,
   isPaused =true,
   onProgress,onEnd

})=>{
    const interval=React.useRef(null);

    const[millis,SetMillis]=useState(null);

    const countDown=()=>{
        SetMillis((time)=>{
            if(time===0){
                clearInterval(interval.current)
                onEnd();

                return time;
            }
            const timeLeft=time-1000;
            onProgress(timeLeft/minutesToMillis(minutes))
            return timeLeft;
        })
    }
        useEffect(()=>{
            SetMillis(minutesToMillis(minutes))
        },[minutes])
        useEffect(() => {
            if(isPaused){
                if(interval.current) clearInterval (interval.current);
                return;
            }
            interval.current=setInterval(countDown,1000);
            return ()=>clearInterval(interval.current)
        }
    ,[isPaused])
   

    const minute=Math.floor(millis/1000/60)%60;
    const seconds=Math.floor(millis/1000)%60;

    return(
        <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:80,
        fontWeight:'bold',
        color:'white',
        padding:20,
        backgroundColor:'rgba(94,132,226,0.3)'


    }
})