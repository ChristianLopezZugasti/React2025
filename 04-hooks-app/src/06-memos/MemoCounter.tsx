import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react"

const heavyStuff = (iterationNumber: number) => { 
    console.time('heavyStuff')

    for (let index = 0; index < iterationNumber; index++) {
        // Simulate heavy computation
        console.log('Processing iteration:')
    }

    console.timeEnd('heavyStuff')
    return `Processed ${iterationNumber} iterations`
}



export const MemoCounter = () => {
    const {counter,increment} = useCounter(40000)
    const {counter:counter1,increment:increment1} = useCounter(40000)

    //esta funcion se ejecuta cada vez que se renderiza el componente,
    //useMemo, memoriza un valor de retorno , recibe una funcion callback y un arreglo de dependencias
    //si el arreglo de dependencias cambia, se vuelve a ejecutar la funcion
    const myHeavyValue = useMemo( () => heavyStuff(counter), [counter] )

    return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white"> Memo MemoCounter - {myHeavyValue} </h1>
        <hr/>
        <h4>Counter: {counter}</h4>
        <h4>Counter: {counter1}</h4>

        <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={increment}>
            Incrementar
        </button>
        <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={increment1}>
            Incrementar
        </button>

    </div>
)
}
