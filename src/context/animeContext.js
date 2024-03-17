import { createContext, useContext,useCallback, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = ({ children }) => {
  const [animeList, setAnimeList] = useState(false);

  const fetchData = useCallback(async () => {
    const response = await axios.get("https://api.jikan.moe/v4/anime");
    const { data: animes } = response.data;
    setAnimeList(animes);
  },[setAnimeList]);

  const data = { animeList, setAnimeList, fetchData };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAnime = () => useContext(Context);

export default Provider;
