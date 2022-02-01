import { StatusBar } from 'expo-status-bar';
import React from 'react';


import LogoSVG  from '../../assets/logo.svg'



import {
  Container,
  Header,
  HeaderContent,
  Title,
} from './styled'

export function Home(){
  return(

 <Container>  
     <StatusBar
        style="light"
     />
    <Header>
      
      <HeaderContent>
          <LogoSVG
            width={108}
            height={12}
          />
          <Title>Total de 12 carros</Title>
      </HeaderContent>



    </Header>
  </Container>
);
}