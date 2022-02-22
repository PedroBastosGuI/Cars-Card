import React from 'react';
import { ButtonBack } from '../../Components/ButtonBack';
import Arrow from '../../assets/arrow.svg';
import {useNavigation} from '@react-navigation/native';

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
import { StatusBar } from 'react-native';
import { Button } from '../../Components/Button';
import { Calendar, DayProps, GenereteInterval,MarkedDateProps } from '../../Components/Calendar';

export function Scheduling(){
    const[lastSelectedDate, setLastSelectedDate] = React.useState<DayProps>({} as DayProps);
    const[markedDates, setMarkedDates] = React.useState<MarkedDateProps>({} as MarkedDateProps);




    const navigation = useNavigation();


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
            onPress={() => navigation.goBack('Home')}

        />
        <Title>
        Escolha uma{'\n'}
        data de início e{'\n'}
        fim do aluguel
     </Title>

     <RentalPeriod>
         <DateInfo>
             <DateTitle>DE</DateTitle>
             <DateValue selected={false}/>
         </DateInfo>

         <Arrow/>

         <DateInfo>
             <DateTitle>ATÉ</DateTitle>
             <DateValue selected={false}/>
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
            onPress={() => navigation.navigate('SchedulingDetails')}
        />
    </Footer>
     
  </Container>
);
}