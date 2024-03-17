import axios from "axios";
import { BASE_URL } from "./config";

export const getAnime = async(id) =>{
    const response = await axios.get(`${BASE_URL}/anime/${id}`);
    const { data: anime } = response.data;
    return anime

}