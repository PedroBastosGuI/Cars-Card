// criando recurso de rotas 


import axios from 'axios';


const api = axios.create({
    baseURL:"http://192.168.2.11:3000",
});


export {api}