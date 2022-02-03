import React from 'react';

import {
    Container,
    Title
} from './styled';

interface Props{
    title: string;
    color?:string;

}

export function Button({
    title,
    color,
    ...rest
}:Props){
  return(
    <Container
        {...rest}
        color={color}
    >
        <Title>{title}</Title>
    </Container>
);
}