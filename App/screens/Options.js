import React from 'react';
import { View,TouchableOpacity,Text,SafeAreaView,StyleSheet, ScrollView,StatusBar } from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RowItem,RowSeparator } from '../components/RowItem';
export default ()=> {
    return(
        <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="default" color={colors.white}/>

            <ScrollView>
        <RowItem
        ttext="Themes"
        onPress={()=>alert("Tod!")}
        chevronrighticon={<Icon name="chevron-right" size={20} color={colors.blue} />}
        />

        <RowSeparator/>
        
        <RowItem
        ttext="Themes"
        onPress={()=>alert("second!")}
        chevronrighticon={<Icon name="chevron-right" size={20} color={colors.blue} />}
        />

        <RowSeparator/>
        <RowItem
        ttext="Themes"
        chevronrighticon={<Icon name="chevron-right" size={20} color={colors.blue} />}
        />

        </ScrollView>
        </SafeAreaView>
        
    
    );
};

