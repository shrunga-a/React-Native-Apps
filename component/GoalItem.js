import React, { useEffect } from 'react'
import {StyleSheet,View,Text, Pressable,useState} from 'react-native'


 function GoalItem(props) {

  
    


  
    // useEffect(() => {
    //   var date = new Date().getDate(); //Current Date
    //   var month = new Date().getMonth() + 1; //Current Month
    //   var year = new Date().getFullYear(); //Current Year
    //   var hours = new Date().getHours(); //Current Hours
    //   var min = new Date().getMinutes(); //Current Minutes
      
    //   setCurrentDate(
    //     date + '/' + month + '/' + year + ' ' + hours + ':' + min 
    //   );

    // }, []);

    //   var date=moment()
    //  .utcOffset('+0.5:30')
    //   .format('YYYY-MM-DD HH:mm:ss')
    //    setCurrentDate(date)
  return (
    
    <View style={style.goalItem}> 
     <Pressable  android_ripple={{color:'DE8CF0'}}   onPress={props.onDeleteitem.bind(this,props.id)}
       style={({ pressed }) => pressed && style.pressedItem}>
        <Text style={style.goalText}> {props.text}</Text>
        <View>
        <Text style={style.date}>{props.date}</Text>
        </View>
       
        
    
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
      date:{
        color: '#FFFFFF',
        padding: 8 ,
      },
    
});