import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import colors from '../constants/colors';
import { ConversionContextProvider } from '../util/ConversionContext';


const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator 
  //initialRouteName="Options"
  >
    <MainStack.Screen name="Home" component={Home} options={{ headerShown:false}}/>
    <MainStack.Screen name="Options" component={Options} />
   
  </MainStack.Navigator>
);

const ModelStack=createStackNavigator();
const ModelStackScreen=()=>(
  <ModelStack.Navigator presentation="Modal">
    <ModelStack.Screen
    name="Main"
    component={MainStackScreen}
    options={{headerShown:false}}
    />
    <ModelStack.Screen name="CurrencyList" component={CurrencyList} 
    options={({naviagation,route})=>(
      {
        title:route.params && route.params.title,
        //headerLeft:null,
        headerLe:()=>{
          <TouchableOpacity onPress={()=>naviagation.pop()} style={{paddingHorizontal:10, paddingVertical:10}}>
          <Icon name="cog" size={30} color={colors.black} /> 
          </TouchableOpacity>
        }
      }
    )
    }/>
  </ModelStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
    <ModelStackScreen/>
    </ConversionContextProvider>
      </NavigationContainer>
);

