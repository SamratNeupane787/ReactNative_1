import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    Button,
    Alert,
    useColorScheme, StyleSheet
} from "react-native"

const styles = StyleSheet.create({
    container : {
        flex: 1 , 
        alignItems: 'center',
        justifyContent:'center',
       marginTop:8,
       marginBottom:6
    },
   
    whiteText :{
        color:'#ffffff'
    },
    darkText :{
        color:'#000000'
    }
    
})

function AppPro():  JSX.Element{
    const isDarkMode = useColorScheme()  === 'dark'

    return(
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Helloo World!</Text>
            </View>
        </SafeAreaView>

    )
}


export default AppPro