import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../hooks/auth';
import {AppTabNavigation} from './app.tab.routes';
import {AuthRoutes} from './auth.routes';


export function Routes(){
    const {user} = useAuth();
    console.log(user)
    return(
        <NavigationContainer>
            {user.id ? <AppTabNavigation/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}