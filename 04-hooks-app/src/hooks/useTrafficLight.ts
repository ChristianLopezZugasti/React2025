import { useEffect, useState } from "react"

export const useTrafficLight = () => {
  const [light,setLight] = useState('red')    
  const [countdown, setcountdown] = useState(5)

  //Dispara efectos secundarios, lo que esta dedfinio dentro de la funcion, 
  // cada que ujn elemento de la lista de dependencias cambie 
  useEffect(()=> {
    if(countdown == 0)
    console.log({countdown})

     const intervalId = setInterval(()=> {
       console.log('setInterval llamado')
       setcountdown( (prev) => prev-1 )
      },1000)

     return () => {
        clearInterval(intervalId)
     }

  },[countdown])

  useEffect(() => {
    if(countdown > 0) return
      setcountdown(5)
      if(light === 'red'){
        setLight('green')
        return
      }
      if(light === 'yellow'){
        setLight('red')
        return
      }
      if(light === 'green'){
        setLight('yellow')
        return
    }
  },[countdown,light])


  return {
    light,countdown, setLight, setcountdown
  }

 }
 
 