import {  createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data"

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

interface UserContextProps {
    //state
    AuthStatus:  AuthStatus
    user: User | null
     isAuthenticated: boolean
    //methods
    login: (userId: number) => boolean
    logout: ()=> void
}

export const UserContext = createContext({ } as UserContextProps)

export const UserContextProvider = ({children}: PropsWithChildren) => {
 

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User|null>(null)

    const handleLogin = (userId: number) => {
        
        const user = users.find(user => user.id === userId)
        if(!user) {
            console.log(`User not found ${userId}`)
            setUser(null)
            setAuthStatus('not-authenticated')
            return false
        }
        console.log('user desde context',user)
        setUser(user)
        setAuthStatus('authenticated')

        localStorage.setItem('userId',userId.toString())

        return true
    }
    
    const handlelogout = ()=>{
        setAuthStatus('not-authenticated')
        setUser(null)
        localStorage.removeItem('userId')
    }

    useEffect(()=>{
        const storedUserId = localStorage.getItem('userId')
        if(storedUserId){
            handleLogin(+storedUserId)
            return
        } 
        handlelogout()

    },[])

//Con esto, a todos los hijos de este provider, pueden 
//acceder a estos datos, y funciones
  return <UserContext value={{  //En versiones anteriores se usa .Provider
    AuthStatus: authStatus,
    isAuthenticated: authStatus === 'authenticated' ,
    user : user,
    login: handleLogin,
    logout: handlelogout


  }}> 
  {children}
  </UserContext>
}
