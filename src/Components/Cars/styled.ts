import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native'

export const Container = styled(TouchableOpacity)`;
    width:100%;
    height:126px;

    background-color:${({theme}) => theme.colors.background_secondary};

    flex-direction:row;
    align-items:center;
    justify-content: space-between;

    padding:24px;
    margin-bottom:20px;
`;

export const InformationContent = styled.View`
    
`;

export const TextInformation = styled.View`
    width: 100%;
`;

export const TitleCarName = styled.Text`
    font-size:${RFValue(10)}px;
    color:${({theme}) => theme.colors.text_detail};
    font-family:${({theme}) => theme.fonts.secondary_500};
    text-transform:uppercase;
`;

export const CarModel = styled.Text`
    font-size:${RFValue(16)}px;
    color:${({theme}) => theme.colors.text};
    font-family:${({theme}) => theme.fonts.secondary_500};
`;

export const ValueCarContent = styled.View`

    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    

`;

export const ValueContent = styled.View`
    margin-top:10px;
`;

export const Price = styled.Text`
    font-size:${RFValue(15)}px;
    color:${({theme}) => theme.colors.main};
    font-family:${({theme}) => theme.fonts.secondary_500};
    text-transform:uppercase;


`;

export const TitleValue = styled.Text`
    font-size:${RFValue(10)}px;
    color:${({theme}) => theme.colors.text_detail};
    font-family:${({theme}) => theme.fonts.secondary_500};
    text-transform:uppercase;

`;

export const Type = styled.View`


`;

export const CarImage = styled.Image`
    width: 180px;
    height:90px;
`;
