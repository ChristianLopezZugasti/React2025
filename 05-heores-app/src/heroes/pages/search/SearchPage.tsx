import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroesStats } from "../../components/HeroesStats"
import { SearchControl } from "./ui/SearchControl"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useQuery } from "@tanstack/react-query"
import {  useSearchParams } from "react-router"
import { searchHeoresAction } from "@/heroes/actions/search-heros.action"

export const SearchPage = () => {
 
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? undefined
  const strength = searchParams.get('strength') ?? undefined
  
  const {data = []} = useQuery({
    queryKey : ['search', {  name,strength}],
    queryFn: ()=> searchHeoresAction({name,strength}),
    staleTime: 1000 * 60 * 5 
  })
  
 
  
  return (
    <> 
      <CustomJumbotron title="Universo de SuperHeroes"
              description="Descubre, explora y admisitra super heroes" />
       <CustomBreadCrumbs currentPage="Buscador de Heroes"
        // breadcrumbs={
        //   [
        //     { label: 'home', to: '/'},
        //     { label: 'home2', to: '/'},
        //     { label: 'home3', to: '/'},
        //   ]
        // }
       />
       
       {/* Stats Dashboard */}
      <HeroesStats/>  
      { /* Madres de filtro*/ }
      <SearchControl/>

      <HeroGrid  heroes={data}/>
    </>
  )
}


export default SearchPage