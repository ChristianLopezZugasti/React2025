import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
    //state
    favorites: Hero[],
    favoriteCount : number



    //methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero)=> void

}



export const FavoriteHeroContext = createContext({} as FavoriteHeroContext)

const getFavoritesFromLocalStorage = ()=> {
    const favorite = localStorage.getItem('favorites')
    return favorite ? JSON.parse(favorite) : []
}




export const FavoriteHeroProvider = ({children}: PropsWithChildren) => {
  
  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage)

  const toggleFavorites = (hero: Hero) => {
    const heroExist = favorites.find(h => h.id === hero.id)
    if(heroExist) {
        setFavorites(favorites.filter(h=> h.id !== hero.id))
        return
    }

    setFavorites([...favorites,hero])
  }

  useEffect(()=> {
    localStorage.setItem('favorites',JSON.stringify(favorites))
  },[favorites])
  
  return (
    <FavoriteHeroContext
        value={{
            favoriteCount:favorites.length,
            favorites:favorites,

            isFavorite: (hero:Hero) =>  favorites.some(h => h.id === hero.id),
            toggleFavorite: toggleFavorites

        }}
    >
        {children}
    </FavoriteHeroContext>
  )
}
