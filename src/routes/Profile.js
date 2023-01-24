import { useParams } from "react-router-dom";
import PlayerProfileCard from "../components/PlayerProfileCard";
import Header from "../components/Header";

import  { PlayerDetailProvider } from "../context/playerDetailContext";
export default function PlayerDetails({ router }) {

  const { puuid } = useParams();

  return (
    
    <PlayerDetailProvider value={{puuid}}>
      <Header/>
      <PlayerProfileCard  puuid={puuid}/>
    </PlayerDetailProvider>
  );
}