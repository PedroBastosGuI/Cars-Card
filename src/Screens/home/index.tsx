import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';


import LogoSVG  from '../../assets/logo.svg'
import { Cars } from '../../Components/Cars';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.routes';

import {api} from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';


import {
  Container,
  Header,
  HeaderContent,
  Title,
  Carlist
} from './styled';
import { Alert } from 'react-native';
import { Load } from '../../Components/Load';

interface PropsType extends NativeStackNavigationProp<RootStackParamsList,'Home'>{}

export function Home(){
// estado para armazenar a resposta para

const [cars, setCars] = React.useState<CarDTO[]>([]);

//pra garantir o carregamento da aplicação 

const [loading, setLoading] = React.useState(true);

  const CarDate = {
    title:'audi',
    name:'R$ 5 Coupé',
    rent:{
      period:'Ao dia',
      price:120,
    },
    thumbnail:'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }
  const navigation = useNavigation<PropsType>();

 React.useEffect(()=>{

  async function fetchCars() {
  try{
      const response = await api.get('/cars');
      setCars(response.data)
     } catch(error) {
      console.log(error);
  } finally{
    setLoading(false)
  }

  }

  fetchCars()

 },[])
  
  return(
 <Container>  
     <StatusBar
        style="light"
        translucent
     />
    <Header>
      
      <HeaderContent>
          <LogoSVG
            width={108}
            height={12} 
          />
          <Title>Total de 12 carros</Title>
      </HeaderContent>
    </Header>
      {loading ? <Load/> : 
        <Carlist
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <Cars
        data={item}
        onPress={()=> navigation.navigate('CarDetails')}
        />}
      
      />
      }
    

    

  </Container>
);
}