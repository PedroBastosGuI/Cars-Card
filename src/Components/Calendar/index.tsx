import React from 'react';
import {Calendar as CustomCalendar, LocaleConfig,DateCallbackHandler } from 'react-native-calendars'
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {GenereteInterval} from './interval';

import {ptBR} from './localeConfig'
//configurando a localidade 

LocaleConfig.locales['pt-br'] = ptBR;

LocaleConfig.defaultLocale = 'pt-br';


interface MarkedDateProps{
    [date: string]:{
        color: string;
        textColor: string;
        disabled?:boolean;
        disableTouachEvent?:boolean;
    }
}


interface CalendarProps{
    markedDates:MarkedDateProps
    onDayPress:DateCallbackHandler
}


 interface DayProps{
    dateString:string;
    day:number;
    month:number;
    year:number;
    timestamp:number;

}



 function Calendar({
    markedDates,
    onDayPress,
}:CalendarProps){
    const theme = useTheme();
  return(
 <CustomCalendar
    renderArrow={(direction) => 
        <Feather
            size={24}
            color={theme.colors.text}
            name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
    }
     headerStyle={{
         backgroundColor: theme.colors.background_secondary,
         borderBottomWidth:0.5,
         borderBottomColor:theme.colors.text_detail,
         paddingBottom:10,
         marginBottom:10
     }}

     theme={{
         textDayHeaderFontFamily: theme.fonts.primary_400,
         textDayFontFamily:theme.fonts.primary_500,
         textDayHeaderFontSize:10,
         textMonthFontSize:20,
         monthTextColor:theme.colors.title,
         arrowStyle:{
             marginHorizontal: -15
         }
     }}

     firstDay={1}
     minDate={new Date()}
     markingType="period"
     markedDates={markedDates}
     onDayPress={onDayPress}
 
 >

  </CustomCalendar>
);
}



export {
    Calendar,
    MarkedDateProps,
    DayProps,
    GenereteInterval
}