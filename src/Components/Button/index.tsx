import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
    Container,
    Title
} from './styled';

interface Props extends TouchableOpacityProps{
    title: string;
    color?:string;
    light?: boolean;

}

export function Button({
    title,
    color,
    light=false,
    ...rest
}:Props){
  return(
    <Container
        {...rest}
        color={color}
    >
        <Title
        light={light}
        >{title}</Title>
    </Container>
);
}