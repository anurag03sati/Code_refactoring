import "./details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnime } from "../api/getAnime";
import { useQuery } from '@tanstack/react-query';
function AnimeDetails() {

  const { id } = useParams();

  const anime = useQuery({ queryKey: ['anime',id], queryFn: ()=>getAnime(id) })

  if(anime.isLoading){
    return <></>
  }
  const animeDetail = anime.data
  return (
    <div className="detailContainer">
      <div className="detailPage">
        <div className="detailLeft">
          <img src={animeDetail.images.jpg.image_url} alt={animeDetail.title} />
        </div>
        <div className="detailRight">{animeDetail.title}</div>
      </div>
    </div>
  );
}
export default AnimeDetails;
