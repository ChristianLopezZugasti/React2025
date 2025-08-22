import { useCallback, useState } from "react"
import { MyTitle } from "./uui/MyTitle"
import { MySubTitle } from "./uui/MySubTitle"


//Memo.Permite que si un componente no cambia, no se vuelve a renderizar, si es que no tiene
//cambios

//const handleMyApiCall = () => {
//    console.log('llamar a funcion')
//} //si estuviera aqui, no se tendria que memorizar,

export const MemoHook = () => {

    const [title,setTitle] = useState('Hola')
    const [subtitle,setSubTitle] = useState('mundo')

    //Cada vez que se vuelve a ejecutar el compoentne, la funcion apunta a otro espacio de 
    //memoria, provoca que se tenga que volkver a rendereizar el componente.
    //useCallBack, memoriza la funcion
    const handleMyAPICall = useCallback(() => {
        console.log('llamra a mi api - ',subtitle)
        return {}
    },[subtitle])  //el arreglo de dependencias,cuando cambia alguna dependencia se vuelve
    //a memorizar la funcion


  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white"> MemoApp </h1>

        <MyTitle title={title} />
        <MySubTitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={ ()=> setTitle('Hello '+ new Date().getTime()) }>
            Cambiar titulo
        </button>

        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg 
                   hover:from-purple-500 hover:to-indigo-500 hover:scale-105 transition-transform duration-300"
        onClick={()=>{ setSubTitle('world')}}>
            Cambiar subtitulo
        </button>


    </div>
  )
}
