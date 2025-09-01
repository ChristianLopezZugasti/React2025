import { RouterProvider } from "react-router"
import { Approuter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContext"

export const ProfesisionalApp = () => {
  return (// Lo que esta dentro del UserContext, es el children , lo que se le pasa como componente 
    <UserContextProvider>  

       <div className="bg-gradient ">

           <RouterProvider router={Approuter}/>
       </div>
    </UserContextProvider>
  )
}
