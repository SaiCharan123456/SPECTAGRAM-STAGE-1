import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNagivator';
import Profile from '../Screens/profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false
          }}
          >
            <Drawer.Screen name='Home' component={StackNavigation}/>
            <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    );
}
