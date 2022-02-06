import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`;
  flex:1;
  background-color:${({theme}) => theme.colors.header};
  padding-top:96px;
`;

export const Content = styled.View`
   flex:1;
    align-items:center;
    justify-content:center;

`;

export const Title = styled.Text`
    font-size:${RFValue(30)}px;
    font-family:${({theme}) => theme.fonts.secondary_600};
    color:${({theme}) => theme.colors.shape};

    margin-top:40px;

    
`;

export const Message = styled.Text`
    font-size:${RFValue(15)}px;
    font-family:${({theme}) => theme.fonts.primary_400};
    color:${({theme}) => theme.colors.shape};
    text-align:center;
    line-height:${RFValue(25)}px;
`;
export const Footer = styled.View`
    width:100%;
    align-items:center;
    justify-content:center;

    margin:80px 0;
 
`;
