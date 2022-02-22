import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

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
  Carlist,
  MyCarsButtons
} from './styled';
import { Alert } from 'react-native';
import { Load } from '../../Components/Load';
import { useTheme } from 'styled-components/native';

interface PropsType extends NativeStackNavigationProp<RootStackParamsList,'Home'>{}

export function Home(){

  const theme = useTheme();
// estado para armazenar a resposta para

const [cars, setCars] = React.useState<CarDTO[]>([]);

//pra garantir o carregamento da aplicação 

const [loading, setLoading] = React.useState(true);

  const navigation = useNavigation<PropsType>();

  //tipando a funçao pra passando informaçoes entre telas
  function handleCarsDetails(car: CarDTO) {
    //para passar as informaçoes
    navigation.navigate('CarDetails', {car})
  }

  function handleOpenMycars() {
    //para passar as informaçoes
    navigation.navigate('Mycar')
  }

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
        onPress={()=> handleCarsDetails(item)}
        />}
      
      />
      }


      <MyCarsButtons
        onPress={handleOpenMycars}
      >
        <Ionicons 
        name='ios-car-sport'
        size={32}
        color={theme.colors.shape}     
        />
      </MyCarsButtons>
  </Container>
);
}

