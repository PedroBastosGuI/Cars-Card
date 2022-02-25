import React from 'react';




//dependence the runOnNativeModulesQueueThread
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../Screens/home';
import { CarDetails } from '../Screens/CarDetails';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { SchedulingComplete } from '../Screens/SchedulingComplete';
import { CarDTO } from '../dtos/CarDTO';
import { Mycar } from '../Screens/Mycar';
import { Splash } from '../Screens/Splash';


export type RootStackParamsList ={ 
    Home:undefined;
    //quando passa vai passar um parametro entre screens
    CarDetails:{car:CarDTO};
    Scheduling:undefined;
    SchedulingDetails:undefined;
    SchedulingComplete:undefined;
   

}









const Stack = createNativeStackNavigator();





export function AppRoutes() {
    return(
        <Stack.Navigator
           screenOptions={
               {
                   headerShown:false,
               }
           }
           initialRouteName="Splash"
        >
             <Stack.Screen 
                name="Splash"
                component={Splash}           
            />
            <Stack.Screen 
                name="Home"
                component={Home}           
            />

            <Stack.Screen 
                name="CarDetails"
                component={CarDetails}           
            />

            <Stack.Screen 
                name="Scheduling"
                component={Scheduling}           
            />
            <Stack.Screen 
                name="SchedulingDetails"
                component={SchedulingDetails}           
            />
             <Stack.Screen 
                name="SchedulingComplete"
                component={SchedulingComplete}           
            />

            <Stack.Screen 
                name="Mycar"
                component={Mycar}           
            />
        </Stack.Navigator>

    );
}
