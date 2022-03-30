import React, { useState } from 'react';
import {useTheme} from 'styled-components';
import { Feather} from '@expo/vector-icons';
import {
  Container,
  InputText,
  IconContainer
} from './styles';
import { TextInputProps } from 'react-native';



interface InputProps extends TextInputProps{
  iconName:React.ComponentProps<typeof Feather>['name'];
  value?:string;
}

export function Input(
  {iconName,value,  ...rest
  }:InputProps
){

  const theme =  useTheme();
  const [isFocus,setIsFocus] = useState(false);
  const [isFilled,setIsFilled] = useState(false);

  
  function handleIsFocused(){
    setIsFocus(true) 
  };

  function handleIsFilled(){
    setIsFocus(false);
    //setar um valor de forma logica 
    setIsFilled(!!value);
  };


  return (
    <Container
      isFocus={isFocus}
    >

    <IconContainer>
      <Feather
        size={24}
        name={iconName}
        color={(isFocus || isFilled) ? theme.colors.main : theme.colors.text_detail}
      />
    </IconContainer>
      <InputText
        onFocus={handleIsFocused}
        onBlur={handleIsFilled}
        {...rest}
      />

    </Container>
  );
}