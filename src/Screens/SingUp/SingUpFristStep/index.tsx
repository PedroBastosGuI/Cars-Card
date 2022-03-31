import React, { useState } from 'react';
import { ButtonBack } from '../../../Components/ButtonBack';
import {Bullet} from '../../../Components/Bullet'
import{KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
import { Input } from '../../../Components/Input';
import { Button } from '../../../Components/Button';
import * as Yup from 'yup';
import { RootStackParamsList } from '../../../Routes/app.routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'SingUpSecondStep'>{}


export function SingUpFristStep(){

  const navigation = useNavigation<PropsRoot>();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [cnh,setCnh] = useState('');


  function handleGoBack(){
      navigation.navigate('SingIn')
  };


  async function NextStep(){
    try{
      // o que espera
      const schema = Yup.object().shape({
        name:Yup.string()
        .required('Nome é obrigratório'),

        email:Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatorio'),

        cnh:Yup.string()
        .required('CNH é obrigatorio')
      })

      const data  = {name,email,cnh};

      await schema.validate(data);
     navigation.navigate('SingUpSecondStep',{user:data})

    }catch(error){

      if(error instanceof Yup.ValidationError){
        return Alert.alert('Opa', error.message)
      }

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
              1. Dados
          </FormsTitle>

          <Input
            iconName='user'
            placeholder="nome"
            value={name}
            onChangeText={setName}
          />

          <Input
            iconName='mail'
            placeholder="E-mail"
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}

          />

          <Input
            iconName='credit-card'
            placeholder="CNH"
            keyboardType='numeric'
            value={cnh}
            onChangeText={setCnh}

          />
          
        </Forms>

        <Footer>
            <Button
              title='Proximo'
              onPress={NextStep}
            />
        </Footer>
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}