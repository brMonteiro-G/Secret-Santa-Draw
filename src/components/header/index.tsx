import { FigureStyle, HeaderStyle } from "components/header/style";

export function Header() {
  return (
    <HeaderStyle>
      <img
        src="png/logo-image.png"
        alt="Ilustração de uma pessoa abrindo um presente"
      />
      <FigureStyle>
        <img
          src="svg/logo.svg"
          alt="Logo do sorteador de amigo secreto com a figura de um dado"
        />
      </FigureStyle>
    </HeaderStyle>
  );
}
