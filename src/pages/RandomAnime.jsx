import Cards from "../components/Cards/Cards";

import "../components/Cards/Cards.css";
import { useEffect,useState } from "react";
import { getAnimes } from "../api/getAnimes";
function RandomAnime() {

  const [animeList, setAnimeList] = useState([])

  useEffect(()=>{
    getAnimes().then(setAnimeList)
  },[])


  return (
    <div className="cardContainer">
      {animeList.map((anime) => (
          <Cards
            key={anime.mal_id}
            id={anime.mal_id}
            image={anime.images.jpg.image_url}
            title={anime.title}
          />
        ))}
    </div>
  );
}
export default RandomAnime;
