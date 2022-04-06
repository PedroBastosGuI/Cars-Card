import React from 'react';
import styled,{css} from 'styled-components/native';
import {
    TouchableOpacity
} from 'react-native';
import theme from '../../style/global/theme';
import { RFValue } from 'react-native-responsive-fontsize';



interface PropsActive{
    active: boolean;
}

export const Container = styled.View`
    background-color:${({theme}) => theme.colors.background_primary};
`;


export const Header = styled.View`
    width:100%;
    height:227px;
    padding:0 24px;
    background-color:${({theme}) => theme.colors.header};

    align-items:center;
`;

export const HeaderTop = styled.View`
    width: 100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;


    margin-top:35px;
`;

export const HeaderTitle = styled.Text`
    font-size:${RFValue(25)}px;
    font-family:${({theme}) => theme.fonts.secondary_600};
    color:${({theme}) => theme.colors.background_secondary};
`;

export const LogoutButton = styled(TouchableOpacity)`
`;


export const PhotoContainer = styled.View`
    background-color:${({theme}) => theme.colors.shape};
    width: 180px;
    height: 180px;
    border-radius: 90px;
    margin-top:48px;
`;

export const Photo = styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
`;

export const PhotoButton = styled(TouchableOpacity)`
    background-color:${({theme}) => theme.colors.main};
    width:40px;
    height:40px;


    align-items: center;
    justify-content: center;

    position:absolute;
    bottom:10px;
    right:10px;
`;



export const Content = styled.View`
    padding:0 24px;
    margin-top: 122px;

`;

export const ContentHeader = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.line};

    flex-direction: row;
    justify-content:space-around;

    margin-bottom: 24px;

`;
export const Option = styled(TouchableOpacity)<PropsActive>`

    padding-bottom: 14px;

    ${({active}) => active && css`
        border-bottom-width:3px;
        border-bottom-color:${({theme}) => theme.colors.main};
    `}
`;

export const OptionTitle = styled.Text<PropsActive>`
    font-size:${RFValue(20)}px;
    font-family:${({theme,active}) => active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
    color:${({theme,active}) => active ? theme.colors.header : theme.colors.text_detail};
`;


export const Section = styled.View`


`;