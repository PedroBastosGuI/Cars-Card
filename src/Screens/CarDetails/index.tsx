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
import Animated, {useSharedValue,useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

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

   const scrollY = useSharedValue(0)
   const scrollHandle =useAnimatedScrollHandler(event => {
      scrollY.value = event.contentOffset.y
      console.log(event.contentOffset.y)
   })

   const headerStyledAnimated = useAnimatedStyle(() => {
      return {
         height: interpolate(
            scrollY.value,
            [0,200],
            [200, 70],
            Extrapolate.CLAMP
         ),
      }
   })
   function handleConfirmRental(){
      navigation.navigate('Scheduling', {car});
   }

   return(
 <Container>
    <StatusBar 
    translucent
    backgroundColor = "transparent"
    style='dark'
    />
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

      <Animated.ScrollView
         contentContainerStyle={{
            paddingHorizontal:24,
         }}
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandle}
      style={[headerStyledAnimated]}
      >
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

      </Animated.ScrollView>

      <Footer>
         <Button
            title="Confirmar"
            onPress={handleConfirmRental}
         />
      </Footer>


  </Container>
);
}