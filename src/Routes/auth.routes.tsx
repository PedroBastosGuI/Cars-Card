import React from 'react';




//dependence the runOnNativeModulesQueueThread
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Splash } from '../Screens/Splash';
import { SingUpSecondStep } from '../Screens/SingUp/SingUpSecondStep';
import { SingUpFristStep } from '../Screens/SingUp/SingUpFristStep';
import { SingIn } from '../Screens/SingIn';
import { SchedulingComplete } from '../Screens/SchedulingComplete';
import { Home } from '../Screens/home';


export type RootStackParamsList ={ 
    Splash:undefined;
    //quando passa vai passar um parametro entre screens
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

export function AuthRoutes() {
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
                name="SingIn"
                component={SingIn}           
            />

        <Stack.Screen 
                name="SingUpFristStep"
                component={SingUpFristStep}           
            />
            
            <Stack.Screen 
                name="SingUpSecondStep"
                component={SingUpSecondStep}           
            />

            <Stack.Screen 
                name="SchedulingComplete"
                component={SchedulingComplete}           
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
           
        </Stack.Navigator>
    );
}

