import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
} from 'react';
import { api } from '../services/api';
import {database} from '../databases';
import {User as ModelUser} from '../databases/model/User';


//tipando os parametros de

interface User{
    id:string;
    user_id:string;
    email:string;
    name:string;
    driver_license:string;
    avatar:string;
    token:string;
};


interface SingInCredentials{
    email:string;
    password:string;
};

interface AuthContextData{
    user:User;
    signIn: (credentials:SingInCredentials) => Promise<void>;
    singOut:() => void;
};

interface AuthProviderProps{
    children:ReactNode
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);





// vai prover o contexto para todo os filhos

function AuthProvider({children} :AuthProviderProps){
    const[data, setData] = useState<User>({} as User);

    async function signIn({email, password}:SingInCredentials){

        try{
            // fazer um request de
            const response = await api.post('/sessions', {
                email,
                password
            });
            const {token,user} = response.data;
            //injetando o token no header da request de
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const userCollection =  database.get<ModelUser>('users');
            await database.write(async () => {
                await userCollection.create((newUser) => {

                    //escrevendo no banco 
                    newUser.user_id = user.id,
                    newUser.name = user.name,
                    newUser.email = user.email,
                    newUser.driver_license = user.driver_license,
                    newUser.avatar = user.avatar,
                    newUser.token = user.token
                })
            })

            setData({...user, token});
            console.log(data)

        }catch(error:any){
            throw new Error(error)
        }
       
    };

    async function singOut(){
        try{
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                const userSelect = await userCollection.find(data.id)//removendo user;
                await userSelect.destroyPermanently();
            });

            setData({} as User)
        }catch(error:any){
            throw new Error(error)
        }
    }

    useEffect(() => {
        async function loadUserData(){
            const userCollection = database.get<ModelUser>('users');
            const response = await userCollection.query().fetch();
            console.log("###LOGADO")
            console.log(response)

            if(response.length > 0){
                const userData = response[0]._raw as unknown as User // para forçar a tipagem use um tipo desconhecido
                api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
                setData(userData);
                //injetar o token no cabeçalho da requisição 
            }
        }
        loadUserData();
    },[])
    return(
        <AuthContext.Provider
            value={
                {
                    user:data,
                    signIn,
                    singOut
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
};


// criando hook para ser usado em qualquer interface para

function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
};


export {
    AuthProvider,useAuth
}