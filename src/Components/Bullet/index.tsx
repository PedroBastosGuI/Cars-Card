import React from 'react';

import {
  Container
} from './styles';


interface BolletProps{
    active?: boolean;
}

export function Bullet(
    {active=false}:BolletProps
){
  return (
  <Container 
     active={active} />
        
  );
}