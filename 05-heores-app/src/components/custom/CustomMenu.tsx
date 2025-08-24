import  { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { cn } from "@/lib/utils"

export const CustomMenu = () => {
  //cuistom hook par aobtener la ruta
  const { pathname } = useLocation()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild
                className={ cn(isActive('/') && 'bg-slate-200 ','p-2 rounded-md' )}
              >
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Search*/}
            <NavigationMenuItem>
              <NavigationMenuLink asChild
                className={ cn(isActive('/search') && 'bg-slate-200 ','rounded-md p-2' )} >
                <Link to="/search">Buscar Superheores</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>
  )
}
