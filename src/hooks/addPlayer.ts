import { PlayersContext } from "contexts/PlayersContext";
import { useContext } from "react";
import { Player } from "types/Player";

export const useAddPlayer = () => {
  const { players, setPlayers } = useContext(PlayersContext);
  return (newPlayer: Player) => {
    const newList:Player[] =[...players, newPlayer]; 
    return setPlayers(newList);
  };
};
