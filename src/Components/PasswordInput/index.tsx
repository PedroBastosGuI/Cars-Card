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
  iconName:React.ComponentProps<typeof Feather>['name'];
  value?:string;
}

export function PasswordInput(
  {iconName,value,  ...rest
  }:InputProps
){




  const[isPasswordVisible, setIsPasswordVisible] = useState(true);

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



  function ShowPassword() {
    setIsPasswordVisible(prevState => !prevState); //inverte o state
  }

  const theme =  useTheme();

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
        {...rest}
        onFocus={handleIsFocused}
        onBlur={handleIsFilled}
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