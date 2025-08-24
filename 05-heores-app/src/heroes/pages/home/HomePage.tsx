"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroesStats } from "../../components/HeroesStats"
import { HeroGrid } from "../../components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"
import { getHeroesByPage, getHeroesByPageAction } from "@/heroes/actions/get-herores-bt-page.action"
import { useQuery } from "@tanstack/react-query"

interface Hero {
  id: string
  name: string
  alias: string
  powers: string[]
  description: string
  strength: number
  team: string
  image: string
}



export const  HomePage = () => {

  const [activeTab, setActiveTab] = useState
  <'all' |'favorites' |'heroes' |'villains'>('all')

  const { data } = useQuery({ 
    queryKey:['heroes'], //donde se va a guardar la funcion
    queryFn: ()=>  getHeroesByPageAction(), //la funcion que se va \\a ejecutar,
    staleTime: 1000 *60 *5 //durante este tiempo, se saca la W
  })

  console.log(data)
 
  

  
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Universo de SuperHerores"
        description="Descubre, explora y admisitra super heroes" />

    <CustomBreadCrumbs currentPage="Super Heroes" />

        {/* Stats Dashboard */}
        <HeroesStats/>  

        {/* Controls */}
       

  

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={()=> setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" onClick={()=> setActiveTab('favorites')} className="flex items-center gap-2">
              
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={()=> setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={()=> setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
              <HeroGrid/>
            </TabsContent>
          <TabsContent value="favorites">
              < h1> Favoritos!!!</h1>
          </TabsContent>
          <TabsContent value="heroes">
              < h1> heores!!!</h1>
          </TabsContent>
          <TabsContent value="villains">
              < h1> villanos</h1>
          </TabsContent>

        </Tabs>

        

       
      
      {/* Pagination*/}
      <CustomPagination totalPages={8} />

      </>
    </>
  )
}
