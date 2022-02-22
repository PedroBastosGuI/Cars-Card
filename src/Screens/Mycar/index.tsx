import React from 'react';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import {FlatList, StatusBar} from 'react-native';
import { ButtonBack } from '../../Components/ButtonBack';
import {
Container,
Header,
Title,
SubTitle,
Content,
Appointments,
AppointmentsTitle,
AppointmentsNumber,
} from './styled';
import {useNavigation} from '@react-navigation/native';

import {Cars} from '../../Components/Cars';

interface CarProps{
  car:CarDTO;
  id:string;
  user_id: string;  
}


export function Mycar(){


    const navigation = useNavigation();
    const [cars, setCars] = React.useState<CarProps[]>([]);
    const[loading, setLoading] = React.useState(true);


    function handleGoBack() {
        navigation.goBack('Home');
    }

    React.useEffect(()=>{

        //pra fazer varios cards em função dos chamados

        async function featchCars(){
            try{
                const response = await api.get('/schedules_byuser?user_id=1');
                console.log(response);
                setCars(response.data)
            } catch(error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
         
        }
        featchCars();

    },[])


  return(
 <Container>
     <Header>
        <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor="transparent"
        />
        <ButtonBack
            onPress={handleGoBack}
        />
        <Title>
        Seus agendamentos,
        estão aqui.
        </Title>
        <SubTitle>
        Conforto, segurança e praticidade.  
        </SubTitle>
    </Header>

        <Content>
            <Appointments>
                <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                <AppointmentsNumber>02</AppointmentsNumber>
            </Appointments>
            

            <FlatList
                data={cars}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <Cars data={item.car}/>
                )}
            />
        </Content>
  </Container>
);
}