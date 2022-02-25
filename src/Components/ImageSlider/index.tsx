import React from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
Container,
ImageIndexes,
ImageIndex,
CarImageWrapper,
CarImage,
} from './styled';

interface Props {
    imagesUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({imagesUrl}:Props){
    const [imageIndex, setImageIndex] = React.useState(0)
    const indexChange = React.useRef((info:ChangeImageProps)=>{
        console.log(info);
        setImageIndex(info.viewableItems[0].index!);
    })

// maneira de fazer um slider 

  return(

      //como passar uma props pra deixar interativo 
 <Container>
     <ImageIndexes>
         {
             imagesUrl.map((item, index) => (
                <ImageIndex 
                key={index}
                active={index === imageIndex ? true : false}/>
             ))

         }
         
     </ImageIndexes>



         <FlatList
            data={imagesUrl}
            keyExtractor={key => key}
            renderItem={({item}) => (
                <CarImageWrapper>

                <CarImage
                source={{uri:item}}
                resizeMode="contain"
                />
                </CarImageWrapper>

            )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChange.current}
         />
        
  </Container>
);
}