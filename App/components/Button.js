import React from "react";
import { TouchableOpacity,Text,StyleSheet,Image,View  } from "react-native";
import colors from "../constants/colors";

const styles=StyleSheet.create({
    button:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    buttonIcon:{
        width:20,
        height:20,
        marginRight:10
    },
    buttontext:{
        fontSize:20,
        color:colors.white
    },

});
export const Button=({text,onPress})=>{
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Image source={require("../assets/images/reverse.png")} style={styles.buttonIcon}/>
                <Text style={styles.buttontext}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};