import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';
import EnergySvg from '../../assets/energy.svg';
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

interface CarData {
    title: string;
    name: string;
    rent:{
        period: string;
        price: number;
    },

    thumbnail: string;
};


interface Props{
  data:CarData
}


export function Cars({data}:Props){
  return(
 <Container>
        <InformationContent>

            <TextInformation>
                <TitleCarName>{data.title}</TitleCarName>
                <CarModel>{data.name}</CarModel>
            </TextInformation>

            <ValueCarContent>
                
                    <ValueContent>
                        
                        <TitleValue>{data.rent.period}</TitleValue>
                        <Price>{`R$ ${data.rent.price}`}</Price>
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