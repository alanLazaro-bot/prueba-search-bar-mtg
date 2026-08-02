'use client'
import { useState } from 'react'
import {useSearch} from '@/hooks/useSearch'
import {CardsList} from '@/app/buscador/lista-cartas'



export default function BuscadorPage() {
  const [query, setQuery] = useState('')


const { resultados, loading, error } = useSearch(query)

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {loading && <p>Cargando...</p>}
{error && <p>{error}</p>}
     <CardsList resultados={resultados}/>
    </div>
  )
}