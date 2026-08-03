"use client";

import { Carta } from "@/types/cartas";
import Image from "next/image";

interface CardsListProps {
  resultados: Carta[];
}

export const CardsList = ({ resultados }: CardsListProps) => {
  const defaultClassName = "CardsList";

  return (
    <div className={`${defaultClassName}_contianer`}>
      <ul>
        {resultados.map((carta: Carta) => (
          <li key={carta.id}>
            <h3 className={`${defaultClassName}_title`}>{carta.name}</h3>
            {carta.image_uris && (
              <div className={`${defaultClassName}_image-contianer`}>
                <Image
                  src={carta.image_uris.small}
                  alt={carta.name}
                  width={146}
                  height={205}
                  unoptimized
                  className={`${defaultClassName}_image`}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
