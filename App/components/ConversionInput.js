import { TouchableOpacity,TextInput,View,StyleSheet,Text } from "react-native";
import React from "react";
import { white } from "jest-matcher-utils/node_modules/chalk";
import colors from "../constants/colors";
const styles=StyleSheet.create({
  
    container:{
        marginVertical:5,
        marginHorizontal:10,
        backgroundColor:colors.white,
        borderRadius:10,
        flexDirection:"row"
   },
   containerDisabled:{
    backgroundColor:colors.offWhite
},
    button:{
        borderRightColor:colors.border,
        padding:15,
        borderWidth:1,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    textButoon:{
        backgroundColor:colors.white,
        fontSize:20,
        color:colors.text,
        fontWeight:"bold"
    },
    input:{
        flex:1,
        padding:10,
        color:colors.textLight
    }
});


export const ConversionInput=({text,onPress,...props})=>{
 const containerStyles=[styles.container];
 if(props.editable===false){
    containerStyles.push(styles.containerDisabled);
 }

    return(
     <View style={containerStyles}>
         <TouchableOpacity onPress={onPress} style={styles.button}>
             <Text style={styles.textButoon}>{text} </Text>
         </TouchableOpacity>
         <TextInput style={styles.input} {...props}/>
     </View>
 );   
}