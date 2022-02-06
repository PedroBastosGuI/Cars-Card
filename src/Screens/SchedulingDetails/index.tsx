import React from 'react';
import { Accessory } from '../../Components/Accessory';
import { ButtonBack } from '../../Components/ButtonBack';
import { ImageSlider } from '../../Components/ImageSlider';

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchance from "../../assets/exchange.svg";
import people from "../../assets/people.svg";

import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';

import {
   Container,
   Header,
   CarImages,
   Content,
   Details,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   Descripition,
   Abouat,
   Acessories,
   Footer,
   RentalPeriod,
   CalendarIcon,
   DateInfo,
   Datetitle,
   DateValue,
   RentalPrice,
   RentalPriceLabel,
   RentalPriceDetails,
   RentalPriceDetailsOuota,
   RentalPriceTotal,
} from './styled'
import { Button } from '../../Components/Button';

export function SchedulingDetails(){

   const theme = useTheme();

  return(
 <Container>
     <Header>
        <ButtonBack/>
     </Header>
     <CarImages>
         <ImageSlider 
               imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
         />
     </CarImages>

      <Content>
         <Details>
            <Descripition>
               <Brand>Audi</Brand>
               <Name>Huracan</Name>
            </Descripition>
            
         

         <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
         </Rent>
         </Details>

         <Acessories>
            <Accessory name="380km/h" icon={speedSvg}/>
            <Accessory name="3.2s" icon={accelerationSvg}/>
            <Accessory name="800 HP" icon={forceSvg}/>
            <Accessory name="Gasolina" icon={gasolineSvg}/>
            <Accessory name="Auto" icon={exchance}/>
            <Accessory name="2 pessoas" icon={people}/>

         </Acessories>

         <RentalPeriod>
            <CalendarIcon>
               <Feather
                  name='calendar'
                  size={24}
                  color = {theme.colors.shape}
               />
            </CalendarIcon>

            <DateInfo>
               <Datetitle>DE</Datetitle>
               <DateValue>18/02/2021</DateValue>
            </DateInfo>
            <Feather
                  name='chevron-right'
                  size={24}
                  color = {theme.colors.shape}
               />
            <DateInfo>
               <Datetitle>DE</Datetitle>
               <DateValue>18/02/2021</DateValue>
            </DateInfo>

         </RentalPeriod>

         <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
               <RentalPriceDetailsOuota>R$ 580 x3 diárias</RentalPriceDetailsOuota>
               <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
         </RentalPrice>
      </Content>

      <Footer>
         <Button
            title="Alugar agora"
            color={theme.colors.success}
         />
      </Footer>


  </Container>
);
}