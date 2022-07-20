import { useAddPlayer } from "hooks/addPlayer";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import { Player } from "types/Player";

const Form = () => {
  const [player, setPlayer] = useState<Player>();
  const addList = useAddPlayer();
  const inputRef = useRef<HTMLInputElement>(null);

  const submitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addList(player!);
    const obj: Player = {
      id: "",
      name: "",
      gift: "",
    };
    setPlayer(obj);
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={submitEvent}>
      <input
        type="text"
        value={player?.name}
        placeholder="Insira os nomes dos participantes"
        ref={inputRef}
        onChange={(event) => {
          const obj: Player = {
            id: uuidv4(),
            name: event.target.value,
            gift: "",
          };
          setPlayer(obj);
        }}
      />
      <button type="submit" disabled={!player}>
        Adicionar
      </button>
    </form>
  );
};
export default Form;