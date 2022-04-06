import React,{useState} from 'react';
import {
    Container,
     Header,
     HeaderTop,
     HeaderTitle,
     LogoutButton,
     PhotoContainer,
     Photo,
     PhotoButton,
     Content,
     ContentHeader,
     Option,
     OptionTitle,
     Section
    } from './style';
import { useTheme } from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import { ButtonBack } from '../../Components/ButtonBack';
import { Input } from '../../Components/Input';
import {KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import { PasswordInput } from '../../Components/PasswordInput';

import {useAuth} from '../../hooks/auth';

export function Profile(){

    const user = useAuth();

    const[option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')

    const theme = useTheme();
    const navigation = useNavigation();

    function Goback(){
        navigation.goBack()
    };

    function handleSinOut(){

    };

    function handleOptionChange(selected: 'dataEdit' | 'passwordEdit'){
        setOption(selected)
    }

    return(
        <KeyboardAvoidingView behavior='position' enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <HeaderTop>
                        <ButtonBack 
                        color={theme.colors.shape} 
                        onPress={Goback}
                        />
                        <HeaderTitle>Editar Perfil</HeaderTitle>
                        <LogoutButton 
                        onPress={handleSinOut}
                        >
                            <Feather 
                                name='power'
                                size={24}
                                color={theme.colors.shape}

                            />
                        </LogoutButton>
                    </HeaderTop>

                    <PhotoContainer>
                        <Photo
                            source={{uri:'https://avatars.githubusercontent.com/u/91087463?v=4'}}
                        />

                        <PhotoButton
                            onPress={() => {}}
                        >
                            <Feather
                                name="camera"
                                size={24}
                                color={theme.colors.shape}
                            />
                        </PhotoButton>
                    </PhotoContainer>
                </Header>

                <Content
                 style={{marginBottom:useBottomTabBarHeight()}}
                >
                    <ContentHeader>
                        <Option
                            active={option === 'dataEdit'}
                            onPress={() => handleOptionChange('dataEdit')}
                        >
                            <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
                        </Option>


                        <Option
                            active={option === 'passwordEdit'}
                            onPress={() => handleOptionChange('passwordEdit')}
                        >
                            <OptionTitle active={option === 'passwordEdit'}>Trocar senha</OptionTitle>
                        </Option>
                    </ContentHeader>

                   {
                       option === 'dataEdit' ?  
                       <Section>
                       <Input
                           iconName='user'
                           placeholder="Nome"
                           autoCorrect={false}
                           defaultValue={user.user.name}
                       />
                       <Input
                           iconName='mail'
                           editable={false}
                           defaultValue={user.user.email}

                       />
                       <Input
                           iconName='credit-card'
                           placeholder="CNH"
                           keyboardType='numeric'
                           defaultValue={user.user.driver_license}

                       />
                   </Section>   
                        :
                   <Section>
                       <PasswordInput
                           iconName='lock'
                           placeholder="Senha atual"
                           autoCorrect={false}
                       />
                       <PasswordInput
                           iconName='lock'
                           placeholder="Nova senha"
                           autoCorrect={false}
                       />
                       <PasswordInput
                        iconName='lock'
                        placeholder="Confirmar nova senha"
                        autoCorrect={false}
                       />
                   </Section>  
                   }
                </Content>
            </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}