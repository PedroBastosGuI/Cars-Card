import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
export const Container = styled.View`;
  flex:1;
  background-color:${({theme}) => theme.colors.background_secondary};

`;

export const Header = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    position:absolute;

    margin-top:28px;
    margin-left:17px;
`;

export const CarImages = styled.View`
margin-top:45px;
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding:24,
    alingItems:'center'
  },
  showsVerticalScrollIndicator:false,
})``;

export const Details = styled.View`
  width:100%;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;`

export const Descripition = styled.View``;

export const Brand = styled.Text`
  font-family:${({theme}) => theme.fonts.secondary_500};
  color:${({theme}) => theme.colors.text_detail};
  font-size:${RFValue(10)}px;
  text-transform:uppercase;
`;

export const Name = styled.Text`
 font-family:${({theme}) => theme.fonts.secondary_500};
  color:${({theme}) => theme.colors.title};
  font-size:${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family:${({theme}) => theme.fonts.secondary_500};
  color:${({theme}) => theme.colors.text_detail};
  font-size:${RFValue(10)}px;
  text-transform:uppercase;
`;

export const Price = styled.Text`
  font-family:${({theme}) => theme.fonts.secondary_500};
  color:${({theme}) => theme.colors.main};
  font-size:${RFValue(25)}px;
`;

export const Abouat = styled.Text`
  font-family:${({theme}) => theme.fonts.primary_400};
  color:${({theme}) => theme.colors.text_detail};
  font-size:${RFValue(15)}px;

  text-align:justify;

  margin-top:23px;
`;

export const Acessories = styled.View`
  width:100%;
  flex-direction:row;
  flex-wrap:wrap;

  align-items:center;
  justify-content:center;
  margin-top:16px;

`;

export const Footer = styled.View`
  width:100%;
  background-color:${({theme}) => theme.colors.background_primary};

  padding: 24px 24px;
  padding-bottom: 24px;
`;