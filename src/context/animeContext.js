import { createContext, useContext,useCallback, useState } from "react";
import axios from "axios";
import { getAnimes } from "../api/getAnimes";

const Context = createContext();

const Provider = ({ children }) => {
  const [animeList, setAnimeList] = useState(false);

  const fetchData = useCallback(async () => {
    const animes = await getAnimes();
    setAnimeList(animes);
  },[setAnimeList]);

  const data = { animeList, setAnimeList, fetchData };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAnime = () => useContext(Context);

export default Provider;
