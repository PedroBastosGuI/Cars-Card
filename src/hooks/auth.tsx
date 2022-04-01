import React, {
    createContext,
    useState,
    useContext,
    ReactNode
} from 'react';
import { api } from '../services/api';



//tipando os parametros de

interface User{
    id:string;
    email:string;
    name:string;
    driver_license:string;
    avatar:string;
};

interface AuthState{
    token:string;
    user:User;
};

interface SingInCredentials{
    email:string;
    password:string;
};

interface AuthContextData{
    user:User;
    signIn: (credentials:SingInCredentials) => Promise<void>;
};

interface AuthProviderProps{
    children:ReactNode
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);





// vai prover o contexto para todo os filhos

function AuthProvider({children} :AuthProviderProps){
    const[data, setData] = useState<AuthState>({} as AuthState);

    async function signIn({email, password}:SingInCredentials){
        // fazer um request de
        const response =  api.post('/sessions', {
            email,
            password
        });
        console.log((await response).data)
    }
    return(
        <AuthContext.Provider
            value={
                {
                    user:data.user,
                    signIn
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