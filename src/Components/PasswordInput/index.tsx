import React, { useState } from 'react';
import {useTheme} from 'styled-components';
import { Feather} from '@expo/vector-icons';
import {
  Container,
  InputText,
  IconContainer,
  ChangePasswordVisibilityButton
} from './styles';
import { TextInputProps } from 'react-native';



interface InputProps extends TextInputProps{
  iconName:React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput(
  {iconName,  ...rest
  }:InputProps
){

  const[isPasswordVisible, setIsPasswordVisible] = useState(true);


  function ShowPassword() {
    setIsPasswordVisible(prevState => !prevState); //inverte o state
  }

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
        secureTextEntry={isPasswordVisible}
      />

      <ChangePasswordVisibilityButton
        onPress={ShowPassword}
      >
        <IconContainer>
          <Feather
            size={24}
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </ChangePasswordVisibilityButton>

    </Container>
  );
}