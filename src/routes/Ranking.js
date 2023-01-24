import { useParams } from "react-router-dom";
import Header from "../components/Header";
import RankingList from "../components/RankingList";

import { RankingDetailProvider } from "../context/rankingContext";
export default function PlayerDetails({ router }) {

  const {queue, tier, division} = useParams();
  const rankingtab  = [queue, tier, division]
  console.log(rankingtab)

  return (
    <RankingDetailProvider value={rankingtab}>
      <Header/>
      <RankingList rankingtab={rankingtab}/>
    </RankingDetailProvider>
  );
}