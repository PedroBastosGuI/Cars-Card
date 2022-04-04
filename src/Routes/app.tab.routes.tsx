import React from 'react';

import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Profile } from '../Screens/Profile';
import { Mycar } from '../Screens/Mycar';
import { AppRoutesStack } from './app.stacks.routes';
import { useTheme } from 'styled-components'

import HomeSvg from '../assets/home.svg';
import PersonSvg from '../assets/people.svg';
import CarSvg from '../assets/car.svg';


const {Navigator,Screen} = createBottomTabNavigator();


export function AppTabNavigation(){
    const theme = useTheme()

    return(
        <Navigator
        screenOptions={
            {
                headerShown:false,
                tabBarShowLabel:false,

                tabBarStyle:{
                    height: 78,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: theme.colors.background_primary
                },

                tabBarActiveTintColor:theme.colors.main,
                tabBarInactiveTintColor:theme.colors.text_detail,
            }}

        
        >
            <Screen
                name="AppRoutes"
                component={AppRoutesStack}
                options={{
                    tabBarIcon:({focused,color}) => (
                        <HomeSvg width={24} height={24} fill={color}/>
                    )
                }}
            />
             <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                      <PersonSvg width={24} height={24} fill={color} />
                    )
                  }}
            />
             
             <Screen
                name="Mycar"
                component={Mycar}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                      <CarSvg width={24} height={24} fill={color} />
                    )
                  }}
            />

            
        </Navigator>
    );
}

