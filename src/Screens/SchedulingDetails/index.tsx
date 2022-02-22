import React from 'react';
import { Accessory } from '../../Components/Accessory';
import { ButtonBack } from '../../Components/ButtonBack';
import { ImageSlider } from '../../Components/ImageSlider';

import {getAcessoryIcon} from '../../utils/getAcessoryIcon';
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
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

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.routes';
import { CarDTO } from '../../dtos/CarDTO';
import { getPlataformDate } from '../../utils/getPlataformDate';
import {format} from 'date-fns';
import { api } from '../../services/api';

interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'SchedulingDetails'>{}
interface Params{
   car: CarDTO;
   dates:string[];
}

interface RentalPeriod{
   start: string;
   end: string;
}

export function SchedulingDetails(){

   const[rentalPeriod, setRentalPeriod] = React.useState<RentalPeriod>({} as RentalPeriod);

   const theme = useTheme();
   const navigation = useNavigation<PropsRoot>();
   const route = useRoute();
   const {car, dates}  = route.params as Params;

   const rendalTotal = Number(dates.length * car.rent.price);


   //enviar dados para API
   async function handleConfirmRental(){

   const response = await api.get(`/schedules_bycars/${car.id}`);
   
   const unavailable_dates = [
      ...response.data.unavailable_dates,
      ...dates,
   ];

  await api.post('schedules_byuser', {
     user_id:1,
     car,
   });

    api.put(`/schedules_bycars/${car.id}`, {
      id:car.id,
      unavailable_dates
   })
   .then(() =>  navigation.navigate('SchedulingComplete'))
   .catch (() => Alert.alert('Não foi possivél carregar o pedido'))


   };
   function handleGoBack(){
      navigation.goBack('Scheduling');
   }

   React.useEffect(() => {
      setRentalPeriod({
         start:format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
         end:format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
      })
   }, [])

  return(

 <Container>
     <Header>
        <ButtonBack
            onPress={handleGoBack}
        />
     </Header>
     <CarImages>
         <ImageSlider 
               imagesUrl={car.photos}
         />
     </CarImages>

      <Content>
         <Details>
            <Descripition>
               <Brand>{car.brand}</Brand>
               <Name>{car.name}</Name>
            </Descripition>
            
         

         <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
         </Rent>
         </Details>

         <Acessories>
          {
             car.accessories.map(acessory => (

               <Accessory 
               key={acessory.type}
               name={acessory.name}
               icon={getAcessoryIcon(acessory.type)}/>

             ))
          }

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
               <DateValue>{rentalPeriod.start}</DateValue>
            </DateInfo>
            <Feather
                  name='chevron-right'
                  size={24}
                  color = {theme.colors.shape}
               />
            <DateInfo>
               <Datetitle>DE</Datetitle>
               <DateValue>{rentalPeriod.end}</DateValue>
            </DateInfo>

         </RentalPeriod>

         <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
               <RentalPriceDetailsOuota>{`R$ ${car.rent.price} x ${dates.length} diárias`}</RentalPriceDetailsOuota>
               <RentalPriceTotal>R$ {rendalTotal}</RentalPriceTotal>
            </RentalPriceDetails>
         </RentalPrice>
      </Content>

      <Footer>
         <Button
            title="Alugar agora"
            color={theme.colors.success}
            onPress={handleConfirmRental}

         />
      </Footer>


  </Container>
);
}