
import React,{useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from 'react-native-paper';
import { RoundedButton } from '../../Components/RoundedButton';



export const Focus=({addSubject})=> {
 const[temItem,setTmpItem]=useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}> 
          <Text style={styles.title}>
               What would you like to focus on?
           </Text>
             <View style={styles.inputcontainer}>
                    <TextInput style={{flex:1,marginRight:5}}
                    onSubmitEditing={
                        ({nativeEvent})=>{
                            setTmpItem
                            (nativeEvent.text) 
                        }} />
                    
                    <RoundedButton size={50}title="+" onPress={()=>{
                        addSubject(temItem)
                    }} />
            </View>
             
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
     },
  titlecontainer :{
      flex:0.5,
      padding:24,
      justifyContent:'center',

  },

  title:{
      color:'black',
      fontWeight:'bold',
      fontSize:20,

  },
  inputcontainer:{
      paddingTop:20,
      flexDirection:'row',
      alignItems:'center',
     
  },
});
