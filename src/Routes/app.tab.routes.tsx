import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Profile } from '../Screens/Profile';
import { Mycar } from '../Screens/Mycar';
import { AppRoutesStack } from './app.stacks.routes';




const {Navigator,Screen} = createBottomTabNavigator();


export function AppTabNavigation(){
    return(
        <Navigator
        screenOptions={
            {
                headerShown:false,
            }
        }

        >
            <Screen
                name="AppRoutes"
                component={AppRoutesStack}
            />
             <Screen
                name="Profile"
                component={Profile}
            />
             
             <Screen
                name="Mycar"
                component={Mycar}
            />

            
        </Navigator>
    );
}

