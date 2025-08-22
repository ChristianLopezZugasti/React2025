import React from "react"

interface Props {
    subtitle: string
    callMyAPI: ()=>{}
}

export const MySubTitle = React.memo(({subtitle,callMyAPI}: Props) => {
    console.log('madres desde my subitile')
  return (
    <>
      <h6 className="text-2xl font-bold" >{subtitle}</h6>
      <button className="bg-indigo-500 text-white px-2 py-1 "
      onClick={callMyAPI}> 
        Llamar a funcion
      </button>
    </>
  )
})
