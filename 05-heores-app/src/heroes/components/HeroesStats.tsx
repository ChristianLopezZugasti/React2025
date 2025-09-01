import { 
  Heart,
  Users,
  Zap,
  Trophy,
   } from "lucide-react"
   import { Badge } from "@/components/ui/badge"
import { HeroStatCard } from "./HeroStatCard"
import { useHeroSummary } from "../hooks/useHeroSummary"
import { FavoriteHeroContext } from "../context/FavoriteHeroContext"
import { use, useMemo } from "react"
export const HeroesStats = () => {
 
  const {data: summary} = useHeroSummary()  
  const { favoriteCount,favorites } = use(FavoriteHeroContext) 

  //se omotio la memorizacion por que no hay mas condiciones que provoquen una renderizacxion del compoennte
  // const percentageFavorite = useMemo(()=> {
  //   const percentage = favoriteCount / summary?.totalHeroes
  // },[favoriteCount,summary])
  
  if(!summary) {
    return <div> is pepe </div>
  }


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          
            <HeroStatCard title="Total de personajes"
            icon={<Users className="h-4 w-4 text-muted-foreground" /> }
            >
               <div className="text-2xl font-bold">{summary?.totalHeroes ?? 0}</div>
              <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">
                  {summary?.heroCount} heroes
                </Badge>
                <Badge variant="destructive" className="text-xs">
                  {summary?.villainCount} villanos
                </Badge>
              </div>

            </HeroStatCard>

            <HeroStatCard title="Favoritos"
            icon={<Heart className="h-4 w-4 text-muted-foreground" /> }
            >
              <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
              <p className="text-xs text-muted-foreground">{ ((favoriteCount / summary.totalHeroes) * 100).toFixed(2)  }%of total</p>

            </HeroStatCard>

            <HeroStatCard title="Fuerte"
            icon={<Zap className="h-4 w-4 text-muted-foreground" /> }
            >
              <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
              <p className="text-xs text-muted-foreground">Strength: {summary?.strongestHero.strength}/10</p>

            </HeroStatCard>

            <HeroStatCard title="Inteligente"
            icon={ <Trophy className="h-4 w-4 text-muted-foreground" /> }
            >
              <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
              <p className="text-xs text-muted-foreground">Intelligence: {summary?.smartestHero.intelligence}/10</p>

            </HeroStatCard>

            
        </div>
  )
}
