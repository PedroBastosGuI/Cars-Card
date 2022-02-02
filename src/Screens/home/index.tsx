import { StatusBar } from 'expo-status-bar';
import React from 'react';


import LogoSVG  from '../../assets/logo.svg'
import { Cars } from '../../Components/Cars';



import {
  Container,
  Header,
  HeaderContent,
  Title,
  Carlist
} from './styled'

export function Home(){
  const CarDate = {
    title:'audi',
    name:'R$ 5 Coupé',
    rent:{
      period:'Ao dia',
      price:120,
    },
    thumbnail:'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }




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

    <Carlist
      data={[1,2,3,4,5,6,7]}
      keyExtractor={item => String(item)}
      renderItem={({item}) => <Cars
        data={CarDate}
      />}
    
    />

    

  </Container>
);
}