import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Player } from "types/Player";

interface IPlayerContextProps {
  players: Player[];
  setPlayers:(Dispatch<SetStateAction<Player[]>>);
}
interface IPlayersProviderProps {
  children: ReactNode;
}

export const PlayersContext = createContext<IPlayerContextProps>({
  players: [],
  setPlayers: () => [],
});
PlayersContext.displayName = "Players";
export const PlayersProvider = ({ children }: IPlayersProviderProps) => {
  const [players, setPlayers] = useState<Player[]>([]);
  return (
    <PlayersContext.Provider value={{players,setPlayers}}> {children}</PlayersContext.Provider>
  );
};
