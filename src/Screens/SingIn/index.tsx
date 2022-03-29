import React from 'react';

import {Button} from '../../Components/Button'

import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
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

export function SingIn(){
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
                    />

                    <PasswordInput
                    iconName="lock"
                    placeholder='Senha'
                    />
                </Forms>


                <Buttons>
                    <Button
                        title='Login'
                        onPress={() => {}}
                    />

                <Button
                        title='Criar conta gratuita'
                        color={theme.colors.background_secondary}
                        light // como é um boolean o padrao é true
                        onPress={() => {}}
                    />
                </Buttons>
            </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}