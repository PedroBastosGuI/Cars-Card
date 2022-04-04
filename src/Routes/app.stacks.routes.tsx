import React from 'react';




//dependence the runOnNativeModulesQueueThread
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../Screens/home';
import { CarDetails } from '../Screens/CarDetails';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { SchedulingComplete } from '../Screens/SchedulingComplete';
import { CarDTO } from '../dtos/CarDTO';
import { SingUpFristStep } from '../Screens/SingUp/SingUpFristStep';


export type RootStackParamsList ={ 
    Home:undefined;
    Mycar: undefined;
    Splash:undefined;
    //quando passa vai passar um parametro entre screens
    CarDetails:{car:CarDTO};
    Scheduling:undefined;
    SchedulingDetails:undefined;
    SchedulingComplete:{
        data:{
            title:string;
            message:string;
            nextScreenRoute: 'SingIn'|'Home';
        }
    };
    SingUpFristStep:undefined;
    SingIn:undefined;
    SingUpSecondStep:{ 
        user: { 
          name: string; 
          email: string; 
          driverLicense: string; 
        };
      };
}
const Stack = createNativeStackNavigator();

export function AppRoutesStack() {
    return(
        <Stack.Navigator
           screenOptions={
               {
                   headerShown:false,
               }

           }
           initialRouteName="Home"

        >

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
        </Stack.Navigator>

    );
}

