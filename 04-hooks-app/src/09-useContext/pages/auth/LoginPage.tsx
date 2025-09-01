import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const { login } = useContext(UserContext)
  const [userId, setUserId] = useState('')

  const navigation =  useNavigate()

  const handleSubmit = (event : React.FormEvent<HTMLFormElement> )=>{
    event.preventDefault()
    const result = login(+userId);
    console.log(result)
    if(!result){
      toast.error('Usuario no encontrado')
      return
    }

    navigation('/profile')

  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xxl font-bold"> iniciar sesion</h1>
      <hr/>

      <form className="flex flex-col gap-2 my-2"
      onSubmit={ handleSubmit}>
      <Input type="number" 
      value={userId}
      onChange={ (event => setUserId(event.target.value))}
      placeholder="ID del usuario" />

      <Button type="submit">
        Login
      </Button>

      <Link to='/about'>
        <Button variant="ghost" >
          Volver a la pagina
        </Button>

      </Link>

      </form>

    </div>
  )
}
