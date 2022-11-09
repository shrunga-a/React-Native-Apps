import { Button} from "react-native";
import { StyleSheet,View,FlatList } from "react-native";
import { useState } from 'react';
import GoalItem from "./component/GoalItem";
import Goalinput from "./component/Goalinput";




export default function App() {

  const [ModalIsVisible,setModalIsVisible] = useState(false);
  const [CourseGoal , setCousresGoal] =useState([]);

  

  function StartheadGoalHandler(){
    setModalIsVisible(true);

  }

  function EndGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCousresGoal((CurrentCourseGoal) =>
      
      [...CurrentCourseGoal,
        {text: enteredGoalText, id: Math.random().toString() },
      ]);
      setModalIsVisible(false);
  }

  function DeleteGoalhandeler(id){
   setCousresGoal((CurrentCourseGoal) => {
    return CurrentCourseGoal.filter((goal)=> goal.id !== id);

    
   });

  }


  return (
   
      
       <View style={styles.appContainre}>
      
       <Button title="Add the Goal!!!" 
        color='#a065ec' 
        
        onPress={StartheadGoalHandler}
      />

      {ModalIsVisible && <Goalinput //{ModalIsVisible &&
       visiable={ModalIsVisible}  
       onAddgoal={addGoalHandler} 
       onCancel={EndGoalHandler}
       
     
      />}

     <View style={styles.goalsContainer}>  
     <FlatList 
     data={CourseGoal} 
     renderItem={(itemData) => {
      
      return (
        <GoalItem 
        text={itemData.item.text} 
        id={itemData.item.id}
        onDeleteitem={DeleteGoalhandeler}
        
      />
      );   
     }}
     keyExtractor={(item, index)=>{
      return item.id;

     }}
     alwaysBounceVertical={false}
     />
     </View>
    </View>
   
  
  );
}

const styles = StyleSheet.create({
  appContainre:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    flex:5,
    
  },
});
