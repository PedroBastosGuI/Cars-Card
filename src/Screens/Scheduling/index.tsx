import React from 'react';
import { ButtonBack } from '../../Components/ButtonBack';
import Arrow from '../../assets/arrow.svg';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
Container,
Header,
Title,
RentalPeriod,
DateInfo,
DateTitle,
DateValue,
Content,
Footer,
} from './styled'
import { StatusBar, Alert } from 'react-native';
import { Button } from '../../Components/Button';
import { Calendar, DayProps, GenereteInterval,MarkedDateProps } from '../../Components/Calendar';
import { getPlataformDate } from '../../utils/getPlataformDate';
import {format} from 'date-fns';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod{
    start: number;
    startFormatted: string;
    end: number;
    endFormatted: string;
}

interface Params{
    car: CarDTO;
 }

export function Scheduling(){
    const[lastSelectedDate, setLastSelectedDate] = React.useState<DayProps>({} as DayProps);
    const[markedDates, setMarkedDates] = React.useState<MarkedDateProps>({} as MarkedDateProps);
    const[rentalPeriod, setRentalPeriod] = React.useState<RentalPeriod>({} as RentalPeriod);



    const {navigate,goBack} = useNavigation();
    const route = useRoute();
    const {car}  = route.params as Params


    function handleConfirmRental(){
        if(!rentalPeriod.startFormatted||!rentalPeriod.endFormatted){
            Alert.alert('Selecione um intervalo.');
        } else {
            navigate('SchedulingDetails',{
                car,
                dates:Object.keys(markedDates),
            }              
            );
        }
    }

    function handleGoBack(){
        goBack('Home')
    }


    const handleChangeDate = (day:DayProps) => {
        let start = !lastSelectedDate.timestamp ? day : lastSelectedDate;
        let end = day;

        //Se o usuario selecionar uma data maior

        if(start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);

        const interval = GenereteInterval(start,end);

        setMarkedDates(interval);

        //formatando;
        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            start:start.timestamp,
            end:end.timestamp,
            startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    };

  return(
 <Container>
    <Header>
        <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor="transparent"
        />
        <ButtonBack
            onPress={handleGoBack}

        />
        <Title>
        Escolha uma{'\n'}
        data de in??cio e{'\n'}
        fim do aluguel
     </Title>

     <RentalPeriod>
         <DateInfo>
             <DateTitle>DE</DateTitle>
             <DateValue selected={!!rentalPeriod.startFormatted}>
                 {rentalPeriod.startFormatted}
             </DateValue>
         </DateInfo>

         <Arrow/>

         <DateInfo>
             <DateTitle>AT??</DateTitle>
             <DateValue selected={!!rentalPeriod.endFormatted}>
                {rentalPeriod.endFormatted}
             </DateValue>
         </DateInfo>
     </RentalPeriod>
     </Header>

    <Content>
        <Calendar
        markedDates={markedDates}
        onDayPress={handleChangeDate}
        
        />
    </Content>

    <Footer>
        <Button
            title='Confirmar'
            onPress={handleConfirmRental}
        />
    </Footer>
     
  </Container>
);
}