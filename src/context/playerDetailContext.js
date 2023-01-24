import { createContext } from "react";
import { useParams } from "react-router-dom";

export const PlayerDetailContext = createContext(null);

export function PlayerDetailProvider({ children }) {
  const { puuid } = useParams();

  return (
    <PlayerDetailContext.Provider value={puuid}>
      {children}
    </PlayerDetailContext.Provider>
  );
}