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


interface Props{
    title: string;
    message: string;
    nextScreenRoute: string;
}
export function SchedulingComplete({title,message,nextScreenRoute}:Props){
    const {width}  = useWindowDimensions();
    
    const navigation = useNavigation<PropsRoot>();


    function handleNavigation(){
        navigation.navigate(nextScreenRoute)
    }

  return(


 <Container>
     <LogoSVG
        width={width}
     />

     <Content>
         <DoneSvg width={80} height={80}/>

         <Title>{title}</Title>

         <Message>
             {message}
         </Message>
     </Content>

        <Footer>
            <ConfirmButton
                title="Ok"
                onPress={handleNavigation}

            />
        </Footer>
  </Container>
);
}