import React from 'react';

import EnergySvg from '../../assets/energy.svg';

import {TouchableOpacityProps} from 'react-native';

import {
Container,
InformationContent,
TextInformation,
TitleCarName,
CarModel,
ValueCarContent,
ValueContent,
Price,
TitleValue,
Type,
CarImage,
} from './styled';
import { CarDTO } from '../../dtos/CarDTO';



interface Props extends TouchableOpacityProps{
  data:CarDTO
}


export function Cars({data,...rest}:Props){
  return(
 <Container
    {...rest}
 >
        <InformationContent>

            <TextInformation>
                <TitleCarName>{data.brand}</TitleCarName>
                <CarModel>{data.name}</CarModel>
            </TextInformation>

            <ValueCarContent>
                
                    <ValueContent>
                        
                        <TitleValue>{data.period}</TitleValue>
                        <Price>{`R$ ${data.price}`}</Price>
                    </ValueContent>

                    <Type>
                    <EnergySvg
                        width={20}
                        height={20}
                    />
                    </Type>
            </ValueCarContent>
        </InformationContent>

        <CarImage
            source={{uri:data.thumbnail}}
            resizeMode='contain'
        />
  </Container>
);
}