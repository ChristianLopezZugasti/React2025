"use client"

import {  use, useMemo, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroesStats } from "../../components/HeroesStats"
import { HeroGrid } from "../../components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"
import { useSearchParams } from "react-router"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"


export const  HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams() //nos ayua a establecer queryParameters
  const {favoriteCount,favorites} = use(FavoriteHeroContext)

  const activeTab = searchParams.get('tab') ?? 'all'
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '6'
  const category = searchParams.get('category') ?? 'all'

  const selectTab = useMemo(()=> {
    const validTabs = ['all' ,'favorites' ,'heroes' ,'villains']
    return validTabs.includes(activeTab) ? activeTab : 'all'
  },[activeTab])

  const { data: heroesResponse } = usePaginatedHero(+page,+limit,category)

  const {data: summary} = useHeroSummary()  
  
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Universo de SuperHerores"
        description="Descubre, explora y admisitra super heroes" />

    <CustomBreadCrumbs currentPage="Super Heroes" />

        {/* Stats Dashboard */}
        <HeroesStats />  

        {/* Controls */}
       

  

        {/* Tabs */}
        <Tabs value={selectTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={()=> setSearchParams((prev) => {
              prev.set('tab','all');
               prev.set('category','all');
              return prev // con esto, mantenemos los params que se puedan tener con anteriori
            })}>All Characters ({summary?.totalHeroes})</TabsTrigger>
            <TabsTrigger value="favorites" onClick={()=> setSearchParams((prev) => {
              prev.set('tab','favorites')
              return prev // con esto, mantenemos los params que se puedan tener con anteriori
            })} className="flex items-center gap-2">
              
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={()=> setSearchParams((prev) => {
              prev.set('tab','heroes')
              prev.set('category','heroes');
              prev.set('page','1');

              return prev // con esto, mantenemos los params que se puedan tener con anteriori
            })}>Heroes ({summary?.heroCount})</TabsTrigger>
            <TabsTrigger value="villains" onClick={()=> setSearchParams((prev) => {
              prev.set('tab','villains');
               prev.set('category','Villain');
              prev.set('page','1');
               
              return prev // con esto, mantenemos los params que se puedan tener con anteriori
            })}>Villains ({summary?.villainCount})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
              <HeroGrid heroes = {  heroesResponse?.heroes ?? []} />
            </TabsContent>
          <TabsContent value="favorites">
                            <HeroGrid heroes = {  favorites} />

          </TabsContent>
          <TabsContent value="heroes">
                            <HeroGrid heroes = {  heroesResponse?.heroes ?? []} />

          </TabsContent>
          <TabsContent value="villains">
                            <HeroGrid heroes = {  heroesResponse?.heroes ?? []} />

          </TabsContent>

        </Tabs>

        

       {
        selectTab !== 'favorites' && (

          <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
        )
       }
      
      {/* Pagination*/}

      </>
    </>
  )
}
