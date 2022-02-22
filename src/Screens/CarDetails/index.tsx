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
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.routes';

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
   Accessories,
   Footer
} from './styled'
import { Button } from '../../Components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';


// para poder desesturutura

interface Params{
   car: CarDTO;
}

export function CarDetails(){

   const navigation = useNavigation();
   //para pegar a informação
   const route = useRoute();
   //desestruturando
   const {car}  = route.params as Params


   function handleConfirmRental(){
      navigation.navigate('Scheduling', {car});
   }

   return(
 <Container>
     <Header>
        <ButtonBack
            onPress={() => navigation.navigate('Home')}
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
            <Price> R$ {car.rent.price}</Price>
         </Rent>
         </Details>

         <Accessories>
               {
                  car.accessories.map(acessory => (
                     <Accessory 
                     key={acessory.type}
                     name={acessory.name}
                      icon={getAcessoryIcon(acessory.type)}/>
                  ))
               }
         </Accessories>

         <Abouat>
            {car.about}
         </Abouat>

      </Content>

      <Footer>
         <Button
            title="Confirmar"
            onPress={handleConfirmRental}
         />
      </Footer>


  </Container>
);
}