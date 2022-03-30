import React, { useState } from 'react';
import { ButtonBack } from '../../../Components/ButtonBack';
import {Bullet} from '../../../Components/Bullet'
import{KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';

import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  BulletContainer,
  Title,
  SubTitle,
  Forms,
  FormsTitle,
  Footer
} from './styles';
import { Button } from '../../../Components/Button';
import { PasswordInput } from '../../../Components/PasswordInput';
import theme from '../../../style/global/theme';
import {useRoute} from '@react-navigation/native';

interface Params{
  name:string;
  email:string;
  cnh:string;
}

export function SingUpSecondStep(){

  //const route = useRoute();
  //const{} = route.params as Params 

  const[password, setPassword] = useState('');
  const[passwordConfirm, setPasswordConfirm] = useState('');


  function handleGoBack(){

  };

  function handleRgister(){
    if(!password || !passwordConfirm){
         return Alert.alert('Campo vazio','Preencha os campos corretamente')
    };

    if(password != passwordConfirm){
      return Alert.alert('Senhas nao confere','Preencha os campos corretamente')
 }
  }

  return (

  <KeyboardAvoidingView behavior='position' enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar
            barStyle="light-content"
            backgroundColor='transparent'
            translucent
        />
        <Header>
            <ButtonBack
                onPress={handleGoBack}
            />

          <BulletContainer>
            <Bullet
              active
            />
            <Bullet
              active={true}
            />
        </BulletContainer>
        </Header>

        <Title>
          Crie sua{'\n'}conta
        </Title>
        <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
        </SubTitle>


        <Forms>

          <FormsTitle>
              2. Senha
          </FormsTitle>

          <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Confirmar Senha'
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />

          
        </Forms>
            
        <Footer>
            <Button
              title='Proximo'
              color={theme.colors.success}
              onPress={handleRgister}
            />
        </Footer>
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}