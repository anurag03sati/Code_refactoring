import Cards from "../components/Cards/Cards";
import { useQuery } from '@tanstack/react-query';
import "../components/Cards/Cards.css";
import { getAnimes } from "../api/getAnimes";

function RandomAnime() {
  const animes = useQuery({ queryKey: ['animes'], queryFn: getAnimes })
 
  return (
    <div className="cardContainer">
      {!animes.isLoading && animes.data.map((anime) => (
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
