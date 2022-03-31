import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';



import LogoSVG  from '../../assets/logo.svg'
import { Cars } from '../../Components/Cars';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.routes';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {api} from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';
import {TouchableOpacity,StyleSheet, BackHandler} from 'react-native';


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

 },[]);


 React.useEffect(()=>{
   BackHandler.addEventListener('hardwareBackPress', () => {
     return true;
   })
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

      <PanGestureHandler
        onGestureEvent={onGestureEvent}
     >
        <Animated.View
          style={[
          myCarsButtonStyle,
          {
            position: 'absolute',
            bottom:13,
            right: 22,
          }
          ]}
        
        >
          <TouachaButtonAnimeted
            onPress={handleOpenMycars}
            style={[style.button, {backgroundColor:theme.colors.main}]}
          >
            <Ionicons 
            name='ios-car-sport'
            size={32}
            color={theme.colors.shape}     
            />
          </TouachaButtonAnimeted>
        </Animated.View>
      </PanGestureHandler>
  </Container>
);
}


const style = StyleSheet.create({
  button:{
    width:60,
    height:60,
    borderRadius:30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
