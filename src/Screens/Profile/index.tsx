import React,{useState} from 'react';
import {
    Container,
     Header,
     HeaderTop,
     HeaderTitle,
     LogoutButton,
     PhotoContainer,
     Photo,
     CaptureImage,
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
import * as ImagePicker from 'expo-image-picker';

export function Profile(){

    const user = useAuth();

    const[option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const[avatar, setAvatar] = useState(user.user.avatar);
    const[name, setName] = useState(user.user.name);
    const[driver_license, setDriver_licenser] = useState(user.user.driver_license);
    const[email, setEmail] = useState(user.user.email);


    const theme = useTheme();
    const navigation = useNavigation();

    function Goback(){
        navigation.goBack()
    };

    function handleSinOut(){
    };

    function handleOptionChange(selected: 'dataEdit' | 'passwordEdit'){
        setOption(selected)
    };


    async function handlePickerImage(){
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,4],
            quality:1
        });

        if(result.cancelled){
            return;
        };

        if(result.uri){
            setAvatar(result.uri)
        }
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
                        onPress={user.singOut}
                        >
                            <Feather 
                                name='power'
                                size={24}
                                color={theme.colors.shape}

                            />
                        </LogoutButton>
                    </HeaderTop>

                    <PhotoContainer>
                     {!!avatar && <Photo source={{uri:avatar}}/>}
                        <CaptureImage
                            onPress={handlePickerImage}
                        >
                            <Feather
                                    name="camera"
                                    size={24}
                                    color={theme.colors.shape}
                                />
                        </CaptureImage>
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
                           defaultValue={name}
                           onChangeText={setName}
                       />
                       <Input
                           iconName='mail'
                           editable={false}
                           defaultValue={email}

                       />
                       <Input
                           iconName='credit-card'
                           placeholder="CNH"
                           keyboardType='numeric'
                           defaultValue={driver_license}
                           onChangeText={setDriver_licenser}

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