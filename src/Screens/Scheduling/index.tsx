import React from 'react';
import { ButtonBack } from '../../Components/ButtonBack';
import Arrow from '../../assets/arrow.svg';

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
import { Calendar } from '../../Components/Calendar';

export function Scheduling(){
  return(
 <Container>
    <Header>
        <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor="transparent"
        />
        <ButtonBack/>
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
        <Calendar/>
    </Content>

    <Footer>
        <Button
            title='Confirmar'
        />
    </Footer>
     
  </Container>
);
}