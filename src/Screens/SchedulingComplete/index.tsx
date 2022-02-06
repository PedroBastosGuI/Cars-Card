import React from 'react';
import LogoSVG from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {useWindowDimensions} from 'react-native';

import {
Container,
Content,
Title,
Message,
Footer
} from './styled'
import { ConfirmButton } from '../../Components/ConfirmButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.routes';


interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'SchedulingComplete'>{}

export function SchedulingComplete(){
    const {width}  = useWindowDimensions();
    
    const navigation = useNavigation<PropsRoot>();

  return(


 <Container>
     <LogoSVG
        width={width}
     />

     <Content>
         <DoneSvg width={80} height={80}/>

         <Title>Carro alugado!</Title>

         <Message>
             Agora você so precisa ir {'\n'}
             até a concessionária de RENTX {'\n'}
             pegar o seu automóvel.
         </Message>
     </Content>

        <Footer>
            <ConfirmButton
                title="Ok"
                onPress={() => navigation.navigate('Home')}

            />
        </Footer>
  </Container>
);
}