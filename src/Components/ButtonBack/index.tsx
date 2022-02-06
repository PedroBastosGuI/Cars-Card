import React from 'react';
import {Entypo} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {TouchableOpacityProps} from 'react-native';

import {
Container
} from './styled';



//tipando pra mudar a cor com a verificação 

interface Props extends TouchableOpacityProps{
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