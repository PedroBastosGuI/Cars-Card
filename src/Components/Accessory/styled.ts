import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`;

    min-width: 26%;
    flex: 1;

    
    margin-right: 8px;
    margin-bottom: 8px;
    margin-right: -8px;

    background-color: ${({theme}) => theme.colors.text_detail};

    padding:16px;
    margin-right:6px;
    margin-bottom:8px;
`;

export const Name = styled.Text`
    font-family:${({theme}) => theme.fonts.primary_400};
    color:${({theme}) => theme.colors.text};
    font-size:${RFValue(13)}px;
    line-height:${RFValue(25)}px;`
