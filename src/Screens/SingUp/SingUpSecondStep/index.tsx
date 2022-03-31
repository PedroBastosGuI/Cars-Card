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
import {useNavigation,useRoute} from '@react-navigation/native';

import { RootStackParamsList } from '../../../Routes/app.routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { api } from '../../../services/api';

interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'SingUpSecondStep'>{}

interface Params{
  user:{
    name:string;
    email:string;
    driverLicense:string;
  }
};

export function SingUpSecondStep(){

  const route = useRoute();
  const navigation = useNavigation<PropsRoot>();
  const{user} = route.params as Params
  console.log(user)
  const[password, setPassword] = useState('');
  const[passwordConfirm, setPasswordConfirm] = useState('');


   function handleGoBack(){
      navigation.navigate('SingUpFristStep')
  };

  async function handleRgister(){
    if(!password || !passwordConfirm){
         return Alert.alert('Campo vazio','Preencha os campos corretamente')
    };

    if(password != passwordConfirm){
      return Alert.alert('Senhas nao confere','Preencha os campos corretamente')
    };

   

     await api.post('/users',{
        name:user.name,
        email:user.email,
        driver_license:user.driverLicense,
        password
    })
    .then(() => {
        navigation.navigate('SchedulingComplete',{data:{
          nextScreenRoute:'SingIn',
          message:`Agora é só fazer login ${'\n'}e aproveitar`,
          title:'Conta criada!'  
        }
      });
    })
    .catch((error) => {
      Alert.alert('Error', 'falha ao conectar ao servidor');
      console.log(error);
    })

  
    
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