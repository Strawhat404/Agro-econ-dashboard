import { createContext,useContext,useState } from "react";
const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user,setUser] = useState(null,AuthContext);
    const login = async(credentials) => {
        setUser({id:1, name:'Test User'});
    };
    const logout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value = {{user,login,logout}}>
           {children} 
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext (AuthContext);
    if (context === undefined){
        throw new Error('UseAuth must be used within an AuthProvider');

    }
    return context;
}