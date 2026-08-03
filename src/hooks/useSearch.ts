import { useState, useEffect } from "react";
import { Carta } from "@/types/cartas";

export function useSearch(query: string) {
  const [resultados, setResultados] = useState<Carta[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim().length < 2) return;

    const timeoutId = setTimeout(() => {
      setLoading(true);
      fetch(`https://api.scryfall.com/cards/search?q=${query}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Algo salió mal");
          }
          return res.json();
        })
        .then((data) => {
          setResultados(data.data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setResultados([]);
        })
        .finally(() => setLoading(false));
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return { resultados, loading, error };
}
