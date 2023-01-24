import { createContext } from "react";
import { useParams } from "react-router-dom";

export const RankingDetailContext = createContext(null);

export function RankingDetailProvider({ children }) {
  const { rankingtab } = useParams();

  return (
    <RankingDetailContext.Provider value=''>
      {children}
    </RankingDetailContext.Provider>
  );
}