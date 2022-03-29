import React from 'react';
import {useTheme} from 'styled-components';
import { Feather} from '@expo/vector-icons';
import {
  Container,
  InputText,
  IconContainer
} from './styles';
import { TextInputProps } from 'react-native';



interface InputProps extends TextInputProps{
  iconName:React.ComponentProps<typeof Feather>['name']
}

export function Input(
  {iconName,  ...rest
  }:InputProps
){

  const theme =  useTheme();


  return (
    <Container>

    <IconContainer>
      <Feather
        size={24}
        name={iconName}
        color={theme.colors.text_detail}
      />
    </IconContainer>
      <InputText
        {...rest}
      />

    </Container>
  );
}