import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  flex:1;
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
    font-size:${RFValue(30)}px;
    text-align:justify;
    margin-top:24px;
`;

export const SubTitle = styled.Text`
    color:${({theme}) => theme.colors.shape};
    font-family:${({theme}) => theme.fonts.secondary_400};
    font-size:${RFValue(15)}px;
    margin-top:24px;
`;


export const Content = styled.View`
    flex:1;
    width:100%;
    padding:0 16px;
`;

export const Appointments = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:24px 0;

`;

export const AppointmentsTitle = styled.Text`
    color:${({theme}) => theme.colors.text};
    font-family:${({theme}) => theme.fonts.secondary_400};
    font-size:${RFValue(15)}px;

`;

export const AppointmentsNumber = styled.Text`
    color:${({theme}) => theme.colors.text};
    font-family:${({theme}) => theme.fonts.secondary_500};
    font-size:${RFValue(15)}px;
`;
