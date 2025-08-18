import { useRef } from "react"

export const FocusScreen = () => {


  //Permite tener la referencia al elemento de Dom, sin causar un re render

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
   console.log(inputRef.current?.value) 
    inputRef.current?.focus()

  }



  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white" >Focus Screen </h1>
      <input type="text"
        ref={inputRef}
        className="bg-white text-black px-4 py-2 rounded-md " 
        
        />

        <button 
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" > Set focus </button>
    </div>
  )
}
