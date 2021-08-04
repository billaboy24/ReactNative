
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/Features/focus/Focus';
import { Timer} from './src/Features/timer/Timer';


export default function App() {
  const[focusSubject,setFocusSubject]=useState(null);
  return (
    <View style={styles.container}>

      {focusSubject?
      (
      <Timer focusSubject={focusSubject} onTimerEnd={()=>{
        setFocusSubject(null);
      }}/>
      ):
       (<Focus addSubject={setFocusSubject}/>)}

       

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd700',
    padding:50,
  },
});
