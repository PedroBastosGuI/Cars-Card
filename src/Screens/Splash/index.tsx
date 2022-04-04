import React from 'react';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import {useNavigation} from '@react-navigation/native';
import Animated,{useSharedValue,useAnimatedStyle, withTiming,interpolate,Extrapolate, runOnJS} from 'react-native-reanimated';
import {Button, StyleSheet, Dimensions} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../Routes/app.stacks.routes';


interface PropsRoot extends NativeStackNavigationProp<RootStackParamsList,'Splash'>{};

import {
  Container
} from './styles';

export function Splash(){
  

  const navigation = useNavigation<PropsRoot>();
  // usar as tags do Animated

  const splashAnimation = useSharedValue(0);


  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0,50],
        [1,0]
        ),

      transform:[
        {
          translateX: interpolate(splashAnimation.value,
            [0,50],
            [0,-50],
            Extrapolate.CLAMP,
            )
        }
      ],
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0,25,50],
        [0,.3,1],
        //para respeitar o limite colocados
        ),
        transform: [
          {
            translateX: interpolate(splashAnimation.value,
              [0,50],
              [-50,0],
              Extrapolate.CLAMP
              )
          }
        ],
    }
  })


  function startApp(){
    navigation.navigate('SingIn')
  };

  React.useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      {duration:1000},
      () => {
        // para poder rodar uma  funçao de uma thread diferente
        'worklet'
        runOnJS(startApp)()
        } 
    )
  },[])

  return (
    <Container>

      <Animated.View
        style={[brandStyle,{position: 'absolute'}]}
      >
        <BrandSvg width={80} height={50}/>
      </Animated.View>

      <Animated.View
        style={[logoStyle,{position: 'absolute'}]}
      >
        <LogoSvg width={180} height={20}/>
      </Animated.View>
        
    </Container>
  );
}
