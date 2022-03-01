// criando recurso de rotas 


import axios from 'axios';


const api = axios.create({
    baseURL:"http://192.168.0.119:5000",
});


export {api}