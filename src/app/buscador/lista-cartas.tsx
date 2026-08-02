'use client'
 
import { Carta } from '@/types/cartas'
import Image from 'next/image'

interface CardsListProps {
  resultados: Carta[]
}

export const CardsList = ({resultados}:CardsListProps)=> {
  
  
 return (  
<div>
<ul>
        {resultados.map((carta: Carta) => (
          <li key={carta.id}>
            <h3>{carta.name}</h3>
            {carta.image_uris && <Image src={carta.image_uris.small} alt={carta.name} width={146} height={205} unoptimized/>}
          </li>
        ))}
      </ul>
 </div>
 
      ) 
}
  