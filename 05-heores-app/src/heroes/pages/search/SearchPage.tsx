import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroesStats } from "../../components/HeroesStats"
import { SearchControl } from "./ui/SearchControl"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"

export const SearchPage = () => {
  return (
    <> 
      <CustomJumbotron title="Universo de SuperHeroes"
              description="Descubre, explora y admisitra super heroes" />
       <CustomBreadCrumbs currentPage="Buscador de Heroes"
        breadcrumbs={
          [
            { label: 'home', to: '/'},
            { label: 'home2', to: '/'},
            { label: 'home3', to: '/'},
          ]
        }
       />
       
       {/* Stats Dashboard */}
      <HeroesStats/>  
      { /* Madres de filtro*/ }
      <SearchControl/>
    </>
  )
}


export default SearchPage