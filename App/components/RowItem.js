import React from 'react';
import colors  from '../constants/colors';
import { TouchableOpacity,Text,StyleSheet,View } from 'react-native';


const styles=StyleSheet.create({
    row:{
        paddingHorizontal:5,
        
        paddingVertical:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between"
    },
    text:{
        fontSize:20,
        justifyContent:'center',
        color: colors.text
    },
    rowsepartor:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:colors.border,
        marginLeft:20
    }
});

export const RowItem=({ttext,chevronrighticon,onPress})=>{
return(
    <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.text}>{ttext}
    {chevronrighticon}
    </Text>
</TouchableOpacity>  
);
};

export const RowSeparator=()=><View style={styles.rowsepartor}></View>;