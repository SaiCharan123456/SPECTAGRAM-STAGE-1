import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigation from './TabNavigator';
import PostScreen from '../Screens/PostScreen';


const Stack = createStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
          }}
          >
            <Stack.Screen name='Home' component={TabNavigation}/>
            <Stack.Screen name='PostScreen' component={PostScreen}/>
        </Stack.Navigator>
    );
}
