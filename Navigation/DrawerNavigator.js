import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigator';
import Profile from '../Screens/profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false
          }}
          >
            <Drawer.Screen name='Home' component={TabNavigation}/>
            <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    );
}
