import Image from "next/image";

export default async function CartasRandomPage() {
  const res = await fetch("https://api.scryfall.com/cards/random", {
    headers: {
      "User-Agent": "prueba-search-bar-mtg/1.0",
      Accept: "application/json",
    },
  });
  const data = await res.json();

  return (
    <div>
      <h3>{data.name}</h3>
      <Image
        src={
          data?.image_uris?.large || data?.card_faces?.[0]?.image_uris?.large
        }
        alt="carta de magic"
        width={500}
        height={700}
        unoptimized
      ></Image>
    </div>
  );
}
