import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import LogoSVG  from '../../assets/logo.svg'
import { Cars } from '../../Components/Cars';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../Routes/app.stacks.routes';
import {api} from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  Header,
  HeaderContent,
  Title,
  Carlist,
} from './styled';
import { Load } from '../../Components/Load';
import { useTheme } from 'styled-components/native';
import Animated,{useSharedValue, useAnimatedStyle,useAnimatedGestureHandler, withSpring} from 'react-native-reanimated';

interface PropsType extends NativeStackNavigationProp<RootStackParamsList,'Home'>{}

export function Home(){

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);
  const myCarsButtonStyle = useAnimatedStyle(()=>{
    return {
      transform: [
        {translateX: positionX.value},
        {translateY:positionY.value}
      ]
    }
  });


  //faznedo o component se movimentar la

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_,ctx:any){
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;

    },

    onActive(event, ctx:any){
        positionX.value = ctx.positionX + event.translationX;
        positionY.value = ctx.positionY + event.translationY

    },

    onEnd(){
      //efeito elastico

      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }

  })


  const theme = useTheme();
  const TouachaButtonAnimeted = Animated.createAnimatedComponent(TouchableOpacity)
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

 React.useEffect(()=>{

  let isMounted = true;
  async function fetchCars() {
  try{
      const response = await api.get('/cars');
      if(isMounted){
        setCars(response.data)
      };
     } catch(error) {
      console.log(error);
  } finally{
    if(isMounted){
      setLoading(false)
    };
  }

  }

  fetchCars();
//desmontanto o componente 
  return() => {
    isMounted = false;
  }

 },[]);


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
          <Title>Total de {cars.length}</Title>
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

  </Container>
);
}


