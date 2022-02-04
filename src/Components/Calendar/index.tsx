import React from 'react';
import {Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars'
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {
Container
} from './styled';

//configurando a localidade 

LocaleConfig.locales['pt-br'] = {
    monthNames:['Janeiro','Fevereiro','Março',
    'Abril','Maio','Junho','Julho','Agosto',
    'Setembro','Outubro','Novembro','Dezembro'
],
    monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    dayNames:['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort:['DOM','SEG','TER','QUA','QUI','SEX','SÁB'],
    today:'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';


export function Calendar(){
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
 
 >

  </CustomCalendar>
);
}