import React, { useState,useEffect } from 'react';

import {Button} from '../../Components/Button';



import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Buttons,
  Forms
} from './style';
import theme from '../../style/global/theme';
import { Input } from '../../Components/Input';
import { PasswordInput } from '../../Components/PasswordInput';
import * as Yup from 'yup';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.stacks.routes';


interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'SingIn'>{};
import {useAuth} from '../../hooks/auth';

export function SingIn(){

    const navigation = useNavigation<PropsRoot>();
    const {signIn} = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    async function handleSignIn() {
        try{

            const schema = Yup.object().shape({
                email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
        
                password: Yup.string()
                .required('Senha é obrigatório')
            });
    
            await schema.validate({ email, password });
            navigation.navigate('Home');
            signIn({email, password});

        }catch(err){
            if(err instanceof Yup.ValidationError){
                Alert.alert('Opa', err.message);
            } else {
                Alert.alert('Error', 'Ocorreu um erro ao fazer login, verifique as credenciais')
            }
        }
    }
   

    function handleNavigateAccount(){
        navigation.navigate('SingUpFristStep');

    };


  return (

    <KeyboardAvoidingView behavior='position' enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <StatusBar
                    barStyle='dark-content'
                    backgroundColor='transparent'
                    translucent
                />
                <Header>
                    <Title>
                        Estamos {'\n'}
                        quase lá.
                    </Title>

                    <SubTitle>
                        Faça seu login para começar {'\n'}
                        uma experiência incrível.
                    </SubTitle>
                </Header>

                <Forms>
                    <Input
                        iconName="mail"
                        placeholder='E-mail'
                        keyboardType='email-address'
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        value={email}
                    />

                    <PasswordInput
                    iconName="lock"
                    placeholder='Senha'
                    onChangeText={setPassword}
                    value={password}
                    />
                </Forms>


                <Buttons>
                    <Button
                        title='Login'
                        onPress={handleSignIn}
                    />

                <Button
                        title='Criar conta gratuita'
                        color={theme.colors.background_secondary}
                        light // como é um boolean o padrao é true
                        onPress={handleNavigateAccount}
                    />
                </Buttons>
            </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}