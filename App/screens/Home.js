import React, {useState,useContext} from 'react';
import { View,StyleSheet,StatusBar,Image,Dimensions, Text,ScrollView,Keyboard,TouchableOpacity,ActivityIndicator } from "react-native";
import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { compareAsc, format } from 'date-fns'
import { Button } from '../components/Button';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ConversionContext } from '../util/ConversionContext';
import { color } from 'react-native-reanimated';


const screen=Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.blue,
        flex:1,
        paddingTop:screen.height*0.05
    },
    logoContainer:{
        alignItems:"center",
        
    },
    logoBackground:{
        width:screen.width*0.45,
        height:screen.height*0.25
    },
    logo:{
        position:"absolute",
        width:screen.width*0.25,
        height:screen.height*0.25
    },
    
    textHeader:{
        fontWeight:"bold",
        fontSize:30,
        color:colors.white,
        textAlign:"center",
        
    },
    text:{
        color:colors.white,
        fontSize:20,
        textAlign:"center"
    },
    
    header:{
        alignItems:"flex-end",
        
        marginHorizontal:20
    }
}
);


export default({navigation})=>{

    const [value,setValue]=useState('1');
    const basecurrencyvalue=1;


    const {
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        date,
        rates,
        isLoading,
    }=useContext(ConversionContext);
    //console.log(ConversionContexValue);
    const quotecurrencyvalue=rates[quoteCurrency];
    //const date=new Date();


    const [scrollEnabled,setScrollEnabled]=useState(false);
    
    return(
        
        <View style={styles.container}>
            <ScrollView scrollEnabled={scrollEnabled}>
            <StatusBar barStyle="default" backgroundColor={colors.blue}></StatusBar>
{/* 
            <SafeAreaView style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.push("Options")}>
                <Icon name="cog" size={30} color={colors.white} />   
                </TouchableOpacity>
            
            </SafeAreaView> */}
            


            <View style={styles.logoContainer}>
            <Image 
            source={require("../assets/images/background.png")} style={styles.logoBackground}
            />
            <Image 
            source={require("../assets/images/logo.png")} style={styles.logo}
            resizeMode="contain"
            />
            <Text style={styles.textHeader}> Currancy Conversion</Text>
            </View>
            {isLoading ?
                <ActivityIndicator color={colors.white} size="large"/>
                : 
                 (
                <>
                <ConversionInput
                text={baseCurrency}
                value={value}
                onPress={()=>navigation.push("CurrencyList",{
                    title:"Base Currency",
                    isBaseCurrency:true,
                }
                )}
                onChangeText={(text) => setValue(text)}
                keyboardType="numeric"
                />
    
            <ConversionInput
                text={quoteCurrency}
                value={
                    ''+
                    (parseFloat(value) * quotecurrencyvalue).toFixed(2)
                }
                
                onPress={()=>navigation.push("CurrencyList",
                {
                    title:"Quote Currency",
                    isBaseCurrency:false,
                }
                )}
                onChangeText={text=>setValue(text)}
                keyboardType="numeric"
                editable={false}
                />
                <Text style={styles.text}>1 {baseCurrency} = {quotecurrencyvalue} {quoteCurrency}
                 {/* as of 
                {
                  date && format(new Date(date), 'MMM do, yyyy')
                } */}
                </Text>
    
                <Button text="Reverse Currency" onPress={()=>swapCurrencies()}/>
    
     </>
            )}
                       
            </ScrollView>
            </View>
        
        );
}
