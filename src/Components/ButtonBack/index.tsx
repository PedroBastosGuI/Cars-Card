import React from 'react';
import {Entypo} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {BorderlessButtonProps} from 'react-native-gesture-handler';

import {
Container
} from './styled';



//tipando pra mudar a cor com a verificação 

interface Props extends BorderlessButtonProps{
    color?: string;
}

export function ButtonBack({color,...rest}:Props){
    const theme = useTheme();
  return(
 <Container
    {...rest}
 >
     <Entypo 
        name="chevron-left"
        size={25}

        color={color ? color : theme.colors.text}
     
     />
  </Container>
);
}