import { use, type JSX } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router"

interface Props {
    element: JSX.Element
}



export const PrivateRoute = ({element} : Props) => {

    const {AuthStatus} = use(UserContext)

 if( AuthStatus === 'checking'){
    return <div>Loading... </div>
 }
 if(AuthStatus === 'authenticated') {
    return element
 }


  return <Navigate to="/login" replace /> 
}
