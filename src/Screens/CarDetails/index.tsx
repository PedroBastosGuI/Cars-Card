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
import {useNavigation} from '@react-navigation/native';
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
   Acessories,
   Footer
} from './styled'
import { Button } from '../../Components/Button';

interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'CarDetails'>{}

export function CarDetails(){
   const navigation = useNavigation<PropsRoot>();
   return(
 <Container>
     <Header>
        <ButtonBack
            onPress={() => navigation.navigate('Home')}
        />
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

         <Abouat>
         Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar
         </Abouat>

      </Content>

      <Footer>
         <Button
            title="Confirmar"
            onPress={()=> navigation.navigate('Scheduling')}
         />
      </Footer>


  </Container>
);
}