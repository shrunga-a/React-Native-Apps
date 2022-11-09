import React from 'react'
import {StyleSheet,View,Text, Pressable} from 'react-native'

 function GoalItem(props) {
  return (
    
    <View style={style.goalItem}> 
     <Pressable  android_ripple={{color:'DE8CF0'}}   onPress={props.onDeleteitem.bind(this,props.id)}
       style={({ pressed }) => pressed && style.pressedItem}>
        <Text style={style.goalText}> {props.text}</Text>
        
    
    </Pressable>
    </View>
    
   
  );
}
export default GoalItem
const style = StyleSheet.create({

    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor:'#311b6b',
        color:'FFFFFF'
      },
      pressedItem: {
        opacity: 0.5,
      },
      goalText:{
        color: '#FFFFFF',
        padding: 8 ,
      },
    
});