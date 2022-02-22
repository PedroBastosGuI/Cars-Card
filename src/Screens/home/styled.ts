import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {FlatList,FlatListProps,TouchableOpacity} from 'react-native';
//FORÇANDO TIPAGEM 
import {CarDTO} from '../../dtos/CarDTO';

export const Container = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.background_primary};
`;


export const Header = styled.View`
    width:100%;
    height:115px;
    background-color:${({theme})=> theme.colors.header};

    padding:32px 24px;

`;


export const HeaderContent = styled.View`
    
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    
`;


export const Title = styled.Text`
    font-size:${RFValue(16)}px;
    font-family:${({theme}) => theme.fonts.primary_400};
    color:${({theme}) => theme.colors.text};

`;
//pra forçar tipagem 
export const Carlist = styled(FlatList as new (props:FlatListProps<CarDTO>) => FlatList<CarDTO>)
    .attrs({
    contentContainerStyle:{
        padding:24
    },

    showsVerticalScrollIndicator:false,
})`


`;


export const MyCarsButtons = styled(TouchableOpacity)`
    width: 60px;
    height:60px;

    background-color:${({theme}) => theme.colors.main};
    border-radius:30px;

    align-items: center;
    justify-content: center;

    position:absolute;
    bottom:13px;
    right:22px;

`;
