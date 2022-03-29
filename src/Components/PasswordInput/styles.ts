import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../style/global/theme';

export const Container = styled.View`
    flex-direction:row;
`;

export const IconContainer = styled.View`
    height:56px;
    width:55px;
    justify-content: center;
    align-items: center;
    margin-right:2px;
    background-color:${({theme}) => theme.colors.background_secondary};

`;

export const InputText = styled.TextInput`
    flex:1;
    background-color:${({theme}) => theme.colors.background_secondary};

    font-size:${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${({theme}) => theme.colors.text};
    text-decoration:none;
    padding: 0 23px;
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity``;