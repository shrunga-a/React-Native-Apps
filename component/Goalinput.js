import {View,Button,StyleSheet,TextInput,Modal,Image }from 'react-native'
import { useState } from 'react'


 function Goalinput(props) {

    const [enteredGoalText, setEnterdGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnterdGoalText(enteredText);
    
        
    }

    function addGoalHandler(){
        props.onAddgoal(enteredGoalText);
        setEnterdGoalText('');  
    }




   
  return (

    <Modal visible={props.visible} animationType="slide">
    
    <View style={style.Inputcontainer}>
    <Image  style={ style.image}source={require('../assest/goal.png')}/>
    <TextInput style={style.textInput}  
    name='TextInput'
     placeholder="Goal for the Day!" 
     placeholderTextColor="#FFFFFF"
    
      
    onChangeText={goalInputHandler} 
    value={enteredGoalText} 
    />
    <View style={style.buttoncontainer}>
    <View style={style.button}> 
    <Button title="Add Goal"  onPress={addGoalHandler} color="#f31282"/>
    </View> 
    <View style={style.button}>
    <Button title='Cancel'  onPress={props.onCancel}  color="#b180f0"/>
    </View>
    
    
    </View>
   
    
    </View>
    </Modal>
    
   
  );
}
export default Goalinput;
const style = StyleSheet.create({
    Inputcontainer: {
        flex: 1,
        justifyContent:'center',
        padding: 16,
        alignItems:'center',
        backgroundColor:'#311b6b',  
      },
      image:{
        width: 100,
        height:90,
        margin: 10,

      },
      textInput:{
        borderWidth: 1,
        borderColor:'#e4d0ff',
        width: '100%',
        borderRadius: 6,
        color:'#FFFFFF',
        padding: 16,
    
      },
      buttoncontainer:{
        flexDirection: 'row',
        marginTop:16,
      },
      button:{
        width: 100 ,
        marginHorizontal: 8,

      }


})