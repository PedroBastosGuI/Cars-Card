import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

// baseado em um condiçao passa novas estilizações

interface DateValueProps{
    selected: boolean;
}

export const Container = styled.View`;
  flex:1;
  background-color:${({theme}) => theme.colors.background_secondary};

`;

export const Header = styled.View`
    width:100%;
    height:325px;

    background-color:${({theme}) => theme.colors.header};

    justify-content:center;
    padding:25px;
    padding-top:55px;
`;

export const Title = styled.Text`
    color:${({theme}) => theme.colors.shape};
    font-family:${({theme}) => theme.fonts.secondary_600};
    font-size:${RFValue(34)}px
    text-align:justify;
`;

export const RentalPeriod = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin:32px 0px;
`;

export const DateInfo = styled.View`
    width:30%;

`;

export const DateTitle = styled.Text`
color:${({theme}) => theme.colors.text};
font-family:${({theme}) => theme.fonts.secondary_500};
font-size:${RFValue(10)}px
`;
//pra fazer um barra quando nao tem texto 
export const DateValue = styled.Text<DateValueProps>`
color:${({theme}) => theme.colors.text};
font-family:${({theme}) => theme.fonts.primary_500};
font-size:${RFValue(15)}px;

${({selected,theme}) => !selected && css`
    border-bottom-width:1px;
    border-bottom-color: ${theme.colors.text};
    padding-bottom: 5px;
`}
`;

export const Footer = styled.View`
    padding: 24px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle:{
        paddingBottom:24
    },
    showsVerticalScrollIndicator:false,
})``;

