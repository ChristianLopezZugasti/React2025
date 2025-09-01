import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "../actions/get-herores-bt-page.action"

export const usePaginatedHero = (page: number,limit: number,category = 'all') => {
    return useQuery({ 
      queryKey:['heroes',{page,limit,category}], //la llave unica que identifica la consutla, si cambia page, o limit  
      queryFn: ()=>  getHeroesByPageAction(+page,+limit,category), //la consulta que se va a ejecutar,
      staleTime: 1000 *60 *5 //durante este tiempo, se saca la data del cache 
    })
}
