import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use, useContext } from "react"

export const ProfilePage = () => {

  const { user,logout } = useContext(UserContext)
  console.log(user)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Perfile </h1>
      <hr/>
      <pre className="my-4 w-[60%] overflow-x-auto">
        {JSON.stringify(user,null,2)}
      </pre>
      
      <Button variant="destructive" onClick={logout}>
        Salir
      </Button>

    </div>
  )
}
