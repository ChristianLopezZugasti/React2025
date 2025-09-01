import { use, useEffect, type Usable } from "react"
import { type User } from "./api/get-user.action"


interface Props {
    getUser: Usable<User>
}


//estra aprocimacion no sirve, porque no podriamos mandar props, ya que la funcion esta fuera
// const userPromise = getUserAction(1)


export const ClientInformation = ({getUser}: Props) => {
    
    //perimte usar una funcion asincrona, dentro de un componente que no lo es
    //lo hacemos de este modo para no entrar en el ciclo de vida, 
    const user = use(getUser)
    console.log('funcion llamada')
    console.log('funcion resuleta')


    // useEffect(()=> {
    //     const user =  getUserAction(id)
    //     .then(user => console.log(user))
    // },[id])


  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h4 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h4>
        <p className="text-white text-2xl"> Pedro, Canada </p>
        <p className="text-white text-xl"> un rol de usuario </p>

    </div>
  )
}
