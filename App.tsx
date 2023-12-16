import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Image
} from 'react-native';


function App(){
  return(
    <SafeAreaView>
    <View>
      <Text >
       Learning React Native Day_01
      </Text>
      <Text>
       Components
      </Text>
      <Text>
       Same Like ReactJS
      </Text>
   
      <Button title="Press Me"
      onPress={()=> Alert.alert('button Pressed!!')}/>
      <Image 
      source={{
        uri:'https://www.pexels.com/photo/a-woman-in-black-standing-in-the-dark-19471657/',
      }}/>
    </View>
  </SafeAreaView>
  )
}


export default App;
