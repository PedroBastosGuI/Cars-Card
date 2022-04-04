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
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.stacks.routes';


interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'SchedulingComplete'>{}


interface Params{
   data:
    {title: string;
        message: string;
        nextScreenRoute: 'SingIn' | 'Home'}
}
export function SchedulingComplete(){
    const {width}  = useWindowDimensions();
    const route = useRoute()
    const {data} = route.params as Params
    console.log(data)
    const navigation = useNavigation<PropsRoot>();


    function handleNavigation(){
        navigation.navigate(data.nextScreenRoute)
    }

  return(


 <Container>
     <LogoSVG
        width={width}
     />

     <Content>
         <DoneSvg width={80} height={80}/>

         <Title>{data.title}</Title>

         <Message>
             {data.message}
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