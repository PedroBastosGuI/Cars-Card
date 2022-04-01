//fazendo uma tipagem que vem da API


export interface CarDTO{
    id: string;
      brand: string;
      name: string;
      about: string;
      period: string;
      price: number;
      fuel_type: string;
      thumbnail: string
      accessories: {
          is: string;
          type: string;
          name: string;
        }[];
        
      
      photos: {
        id: string;
        photo: string;
      }[];
    }
